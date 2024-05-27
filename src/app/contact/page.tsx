import { CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/layout/header";
import LeftSideBar from "@/components/layout/left-sidebar";

const Contact = () => {
  return (
    <div className="flex w-full max-w-screen-2xl flex-col items-center justify-between px-14">
      <Header />
      <div className="my-10 grid grid-cols-12 gap-x-5">
        <div className="col-span-2">
          <LeftSideBar />
        </div>
        <div className="pl-8 col-span-8">
          <h1 className="font-semibold text-3xl mb-4 text-green-500">
            İLETİŞİM
          </h1>
          <Card className="space-y-6 border-none bg-green-500">
            <CardContent className="space-y-4 pt-2">
              <div className="flex flex-wrap space-y-4">
                <div className="w-full space-y-2">
                  <Label htmlFor="name" className="text-white text-lg">
                    İsim
                  </Label>
                  <Input
                    className="w-full focus-visible:ring-green-600"
                    id="name"
                    placeholder="İsim Giriniz"
                  />
                </div>
                <div className="w-full space-y-2">
                  <Label htmlFor="surname" className="text-white text-lg">
                    Soyisim
                  </Label>
                  <Input
                    className="w-full focus-visible:ring-green-600"
                    id="surname"
                    placeholder="Soyisim Giriniz"
                  />
                </div>
                <div className="w-full space-y-2 ml-0">
                  <Label htmlFor="email" className="text-white text-lg">
                    Email
                  </Label>
                  <Input
                    className="w-full focus-visible:ring-green-600"
                    id="email"
                    placeholder="Email Giriniz"
                    type="email"
                  />
                </div>
                <div className="w-full space-y-2 ml-0">
                  <Label htmlFor="message-type" className="text-white text-lg">
                    Açıklama Türü
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full text-slate-500 focus-visible:ring-green-600">
                      <SelectValue placeholder="Açıklama Türü Giriniz" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Teknik</SelectItem>
                      <SelectItem value="post">Post</SelectItem>
                      <SelectItem value="your_question_request">Soru Talepleriniz</SelectItem>
                      <SelectItem value="feedback">Geri Bildirim</SelectItem>
                      <SelectItem value="collaboration">İş Birliği</SelectItem>
                      <SelectItem value="other">Diğer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full space-y-2">
                  <Label htmlFor="message" className="text-white text-lg">
                    Açıklama
                  </Label>
                  <Textarea
                    className="w-full min-h-[100px] focus-visible:ring-green-600"
                    id="message"
                    placeholder="Açıklama Giriniz"
                  />
                </div>
              </div>
              <Button className="w-full bg-green-500 hover:bg-green-500 border-2 border-white text-white text-lg">
                GÖNDER
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
