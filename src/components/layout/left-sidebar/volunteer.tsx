import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/lib/get-luicide-icon";

const Volunteer = () => {
  return (
    <Card className="bg-green-500 text-white">
      <CardHeader>
        <div className="flex gap-2">
          <Icon name="heart-handshake" color="white" size={42} />
          <CardTitle className="text-base font-bold">
            Gönüllülük Başvurusu
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
          <Icon name="chevrons-right" color="white" size={12} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default Volunteer;
