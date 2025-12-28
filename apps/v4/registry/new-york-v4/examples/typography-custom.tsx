import {
  Body,
  BodySmall,
  Subheading,
  Title,
  Typography,
} from "@/registry/new-york-v4/ui/typography"

export default function TypographyCustom() {
  return (
    <div className="w-full space-y-8 p-8">
      <div className="space-y-4">
        <Title>Title - 24px SemiBold</Title>
        <Subheading>Subheading - 18px Medium</Subheading>
        <Body>Body - 16px Medium</Body>
        <BodySmall>Body Small - 14px Regular</BodySmall>
      </div>

      <div className="space-y-4">
        <Title textColor="ghostwhite">Title with Ghostwhite Color</Title>
        <Subheading textColor="muted">Subheading with Muted Color</Subheading>
        <Body textColor="ghostwhite">Body with Ghostwhite Color</Body>
        <BodySmall textColor="muted">Body Small with Muted Color</BodySmall>
      </div>

      <div className="space-y-4">
        <Typography variant="title" as="h1">
          Custom Typography with Title variant as h1
        </Typography>
        <Typography variant="subheading" textColor="ghostwhite">
          Custom Typography with Subheading variant and ghostwhite color
        </Typography>
        <Typography variant="body" className="opacity-num-0_5">
          Body text with custom opacity
        </Typography>
      </div>
    </div>
  )
}
