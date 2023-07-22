import { Button } from '../components/shadcn/ui/button';
import useSeoStore from '../stores/SeoStore';

export default function Home(): JSX.Element {
  const setSeo = useSeoStore((state) => state.setMetaData);
  setSeo({
    title: 'Gelecek Bilimde',
    description: 'Gelecek Bilimde',
  });
  return (
    <div>
      <Button>Button</Button>
    </div>
  );
}
