import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";


interface GrantsCardProps {
    id: number
    title : string
    deadline:string
    description:string 
}

export default function GrantsCard({id, title, deadline, description}:GrantsCardProps) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
          <p className="text-small text-default-500">Deadline : {deadline}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="max-h-36 overflow-hidden">{description}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href={`/grants/${id}`}>
          View More
        </Link>
      </CardFooter>
    </Card>
  );
}
