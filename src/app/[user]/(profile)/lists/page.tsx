import mock_data from './_assets/mock_data.json';
import ListItem from './_components/list-item';

interface Properties {
  params: {
    user: string;
  };
}

export default function Lists({ params: { user } }: Properties): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      {mock_data.map(({ isAdded, title, description, count, slug }) => (
        <ListItem
          key={slug}
          isAdded={isAdded}
          title={title}
          description={description}
          count={count}
          slug={slug}
          user={user}
        />
      ))}
    </div>
  );
}
