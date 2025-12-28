import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export default function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="flex w-full flex-col gap-2.5"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </AccordionTrigger>
        <AccordionContent>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </AccordionTrigger>
        <AccordionContent>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
