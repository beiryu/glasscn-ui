import {
  Title,
  Subheading,
  Body,
  BodySmall,
  Typography,
} from "@/registry/new-york-v4/ui/typography"

export function TypographyDemo() {
  return (
    <div className="flex flex-col gap-8">
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
        <Typography variant="body-small" textColor="muted">
          Body Small with muted color
        </Typography>
      </div>

      <div className="space-y-4">
        <div>
          <Title>Example Usage</Title>
          <Subheading className="mt-2">
            List of all your creators
          </Subheading>
          <Body className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Body>
          <BodySmall className="mt-2">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </BodySmall>
        </div>
      </div>
    </div>
  )
}

