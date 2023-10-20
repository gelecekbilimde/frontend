import Card from './card';
import ProfileButtons from './profile-buttons';

export default function ProfileSidebar(): JSX.Element {
  return (
    <>
      <ProfileButtons />
      <Card className="items-center justify-around py-8">
        <div>
          <p className="text-center text-2xl font-bold">2432</p>
          <p>Takipçi</p>
        </div>
        <div>
          <p className="text-center text-2xl font-bold">37</p>
          <p>Takip</p>
        </div>
      </Card>
      <Card col className="gap-4 p-8">
        <h2 className="pb-2 text-lg font-medium">Hakkında</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu nulla, facilisis at vestibulum non,
          venenatis eu libero. Nulla elementum.
        </p>
      </Card>
    </>
  );
}
