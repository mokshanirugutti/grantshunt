import {Card, Divider, Skeleton} from "@nextui-org/react";

export default function LoadingAnimation() {
  return (
    <div className="flex justify-center gap-4 flex-wrap">
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
    </div>    
  );
}


export const LoadingCard = () => {
  return (
    <Card className="w-72 space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-6 rounded-lg bg-default-300" />
      </Skeleton>
      <Divider/>

        <Skeleton className=" rounded-lg my-3">
          <div className="h-10  rounded-lg bg-default-200" />
        </Skeleton>

      <Divider/>

        <Skeleton className="w-4/5 rounded-lg my-3">
          <div className="h-4 w-4/5 rounded-lg bg-default-200" />
        </Skeleton>
      
    </Card>
  )
}
