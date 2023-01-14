import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-bottom from-black to-#121286">
        <Searchbar />

        <div className="px-6 h-calc(100vh-72px) overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Switch>
              <Route exact path="/" component={Discover} />
              <Route path="/top-artists" component={TopArtists} />
              <Route path="/top-charts" component={TopCharts} />
              <Route path="/around-you" component={AroundYou} />
              <Route path="/artists/:id" component={ArtistDetails} />
              <Route path="/songs/:songid" component={SongDetails} />
              <Route path="/search/:searchTerm" component={Search} />
            </Switch>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-bottom from-white/10 to-#2a2a80 backdrop-blur-large rounded-top-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
