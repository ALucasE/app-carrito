import { useState } from "react";
import { Button, Card } from "react-bootstrap";

export const FormatearTexto = ({ content, limit }) => {
  const [showAll, setShowAll] = useState(false);

  const showMore = () => setShowAll(true);
  const showLess = () => setShowAll(false);

  if (content.length <= limit) {
    // there is nothing more to show
    return <>{content}</>;
  }
  if (showAll) {
    // We show the extended text and a link to reduce it
    return (
      <>
        {content}
        <Button variant="outline-info" size="sm" onClick={showLess}>
          ➖
        </Button>
      </>
    );
  }
  // In the final case, we show a text with ellipsis and a `Read more` button
  const toShow = content.substring(0, limit) + "...";
  return (
    <>
      {toShow}
      <Button variant="outline-info" size="sm" onClick={showMore}>
        ➕
      </Button>
    </>
  );
};
