import React, {FC} from 'react';
import Link from "next/link";

type Props = {
    comments: { id: number, body: string } []
}
const CommentsComponent: FC<Props> = ({comments}) => {
    return (
        <div>
            {
                comments.map(({id, body}) => (<div key={id}>
                    <Link href={'/comments/' + id}>{body}</Link>

                </div>))
            }
        </div>
    );
};

export default CommentsComponent;