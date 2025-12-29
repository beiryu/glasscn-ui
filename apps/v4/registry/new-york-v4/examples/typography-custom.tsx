import {
  Body,
  BodySmall,
  Subheading,
  Title,
} from "@/registry/new-york-v4/ui/typography"

export default function TypographyCustom() {
  return (
    <div className="w-full space-y-4 p-8">
      <Title>Title - 24px SemiBold</Title>
      <Subheading>Subheading - 18px Medium</Subheading>
      <Body>Body - 16px Medium</Body>
      <BodySmall>Body Small - 14px Regular</BodySmall>
    </div>
  )
}
