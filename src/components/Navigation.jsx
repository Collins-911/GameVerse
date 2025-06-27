import { useNavigate } from 'react-router-dom';

export default function useNavigation() {
  const navigate = useNavigate();

  const explore_games = () => {
    console.log('Navigating to /game');
    navigate('/game');
  };

  const back = () => {
    console.log('Navigating to /');
    navigate('/');
  };

  return {
    explore_games,
    back,
  };
}


