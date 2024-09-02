import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GenreListSkeleton = () => {
  return (
    <ListItem paddingY={"5px"}>
      <HStack>
        <Skeleton boxSize="32px" borderRadius={8} />
        <SkeletonText width={"100%"} noOfLines={1} skeletonHeight={"15px"} />
      </HStack>
    </ListItem>
  );
};

export default GenreListSkeleton;
