// external deps
import React from 'react';
import { Avatar, Comment, Tooltip } from 'antd';
import { CommentProps } from 'antd/lib/comment';
import moment from 'moment';
import { ConversationDetailsProps } from './ConversationDetails.types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Goku = require('./goku.JPG');

const ConversationDetails: React.FunctionComponent<ConversationDetailsProps> = (
  props: ConversationDetailsProps
) => {
  const {
    conversation: { messages },
  } = props;
  const comments = messages.map((message) => {
    const { id, author, text } = message;
    const commentProps: CommentProps = {
      author,
      avatar: <Avatar src={Goku} alt={author} />,
      content: <p>{text}</p>,
      datetime: (
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      ),
    };
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Comment key={id} {...commentProps} />;
  });

  return <div>{comments}</div>;
};

export default ConversationDetails;
