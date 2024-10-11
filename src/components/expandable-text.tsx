import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  text?: string;
  limit?: number;
}

const ExpandableText = ({ text, limit = 300 }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  if (!text) return null;

  if (text.length <= limit) return <Text>{text}</Text>;

  const textSummary = text.substring(0, limit);
  const textSummaryWithEllipsis = textSummary + "...";

  const handleExpand = () => setIsExpanded(!isExpanded);

  return (
    <>
      <Text>
        {isExpanded ? text : textSummaryWithEllipsis}
        <Button
          size="xs"
          marginLeft={1}
          fontWeight="bold"
          colorScheme="yellow"
          onClick={handleExpand}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
