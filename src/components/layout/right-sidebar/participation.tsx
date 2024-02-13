import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Participation = () => {
  return (
    <Card className="col-span-3">
      <CardHeader className="!pb-3">
        <CardTitle>Gönüllü Başvuru</CardTitle>

        <CardDescription>Bilimin gelişmesine katkı sağlayın!</CardDescription>
      </CardHeader>

      <CardContent>
        <Separator className="mb-4" />

        <div className="flex flex-col space-y-4">
          <Image
            src="/images/application_banner.png"
            alt="application banner"
            width={100}
            height={100}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default Participation;
