import Box from '@mui/material/Box';
import Header from './components/Header';
import ZipInput from './components/ZipInput';
import Feed from './components/Feed';
import { QueryClient, QueryClientProvider } from 'react-query';
import {placeName as placeNameAtom} from './atoms';
import {useRecoilState} from 'recoil'

const queryClient = new QueryClient();

function App() {
  const [placeName] = useRecoilState(placeNameAtom);

  let namePlaceholder = placeName.length > 0 ? ' ' + placeName : '...'

  return (
    <div className="App">
      <Header/>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <QueryClientProvider client={queryClient}>
          <ZipInput/>
        </QueryClientProvider>
        <h2>Weather in{namePlaceholder}</h2>
        <Feed/>
      </Box>
    </div>

  );
}

export default App;
