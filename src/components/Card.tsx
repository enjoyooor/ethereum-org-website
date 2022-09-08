import React, { ReactNode } from "react"
import styled from "@emotion/styled"
import Emoji from "./OldEmoji"
import { Flex } from "@chakra-ui/react"

const Title = styled.h3`
  margin-top: 0;
`

const Description = styled.p`
  opacity: 0.8;
  margin: 0;
`

const StyledEmoji = styled(Emoji)`
  margin-bottom: 1rem;
`

const TopContent = styled.div``

export interface IProps {
  children?: React.ReactNode
  emoji?: string
  title?: ReactNode
  description?: ReactNode
  className?: string
}

const Card: React.FC<IProps> = ({
  emoji,
  title,
  description,
  children,
  className,
}) => (
  <Flex
    direction="column"
    bg="ednBackground"
    borderRadius="2px"
    border="1px"
    borderStyle="solid"
    borderColor="lightBorder"
    p={6}
    className={className}
  >
    <TopContent>
      {emoji && <StyledEmoji size={3} text={emoji} />}
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
    </TopContent>
    {children}
  </Flex>
)

export default Card
