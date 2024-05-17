import { Icon } from "@iconify/react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Volunteer = () => {
  return (
    <Card className="bg-green-500 text-white">
      <CardHeader>
        <div className="flex gap-2">
          <Icon icon="mdi:heart-hand" color="white" fontSize={42} />
          <CardTitle className="text-base font-bold">
            Ekip Arkadaşı Başvurusu
          </CardTitle>
        </div>
        <CardDescription className="text-xs font-medium text-white">
          Siz de ekibimizde yer alarak bilimin gelişmesine katkıda bulunmak
          ister misiniz?
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-center rounded-b-lg bg-green-700 p-3 text-xs font-bold">
        <div className="flex items-center gap-1.5">
          <p>Hemen Başvur</p>
          <Icon
            icon="material-symbols:chevron-right"
            color="white"
            fontSize={24}
          />
        </div>
      </CardFooter>
    </Card>
  );
};

export default Volunteer;
