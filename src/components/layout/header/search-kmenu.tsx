// components/CommandMenu.tsx
import { Command, CommandMenu, CommandWrapper, useCommands } from 'kmenu';
import { FC, useState, useEffect } from 'react';
import { Search, Twitter, Github, Youtube } from 'lucide-react';
import { defaultPostsConstants } from '../../../constants/post.constants.ts';

const SearchKmenu: FC = () => {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(defaultPostsConstants);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    const filteredPosts = defaultPostsConstants.filter(defaultPostsConstant =>
      defaultPostsConstant.header.toLowerCase().includes(query.toLowerCase()) ||
      defaultPostsConstant.content.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredPosts);
  };

  const main: Command[] = [
    {
      category: 'Posts',
      commands: [
        {
          icon: <Search />,
          text: 'Search Posts',
          perform: () => {
            const query = prompt('Enter search query');
            if (query) {
              handleSearch(query);
            }
          }
        }
      ]
    },
    {
      category: 'Social',
      commands: [
        {
          icon: <Twitter />,
          text: 'Twitter',
        },
        {
          icon: <Github />,
          text: 'Github',
        },
        {
          icon: <Youtube />,
          text: 'Youtube',
        }
      ]
    }
  ];

  const [mainCommands] = useCommands(main);

  return (
    <div>
        <CommandWrapper>
          <CommandMenu
            commands={mainCommands}
            crumbs={['Home']}
            index={0}
            placeholder="Search posts..."
          />
        </CommandWrapper>
        {searchQuery && (
          <div>
            <h2>Search Results for "{searchQuery}":</h2>
            <ul>
              {searchResults.map(post => (
                <li key={post.postId}>
                  <h3>{post.header}</h3>
                  <p>{post.content}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
};

export default SearchKmenu;
