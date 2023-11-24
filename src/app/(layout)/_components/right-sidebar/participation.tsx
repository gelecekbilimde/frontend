import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { Separator } from '@/components/ui/separator';

const Participation = () => {
  return (
    <Card className="col-span-3">
      <CardHeader className="!pb-3">
        <CardTitle>Gönüllü Başvuru</CardTitle>

        <CardDescription>Bilimin gelişmesine katkı sağlayın!</CardDescription>
      </CardHeader>

      <CardContent>
        <Separator className="mb-4" />

        <div className="flex flex-col space-y-4"></div>
      </CardContent>
    </Card>
  );
};

export default Participation;

