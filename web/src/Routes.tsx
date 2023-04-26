// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'

import KPWarzLayout from 'src/layouts/KPWarzLayout/KPWarzLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import KPWarzGameLayout from './layouts/KPWarzGameLayout/KPWarzGameLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="AvailableItemses" titleTo="availableItemses" buttonLabel="New AvailableItems" buttonTo="newAvailableItems">
        <Route path="/available-itemses/new" page={AvailableItemsNewAvailableItemsPage} name="newAvailableItems" />
        <Route path="/available-itemses/{id:Int}/edit" page={AvailableItemsEditAvailableItemsPage} name="editAvailableItems" />
        <Route path="/available-itemses/{id:Int}" page={AvailableItemsAvailableItemsPage} name="availableItems" />
        <Route path="/available-itemses" page={AvailableItemsAvailableItemsesPage} name="availableItemses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Services" titleTo="services" buttonLabel="New Service" buttonTo="newService">
        <Route path="/services/new" page={ServiceNewServicePage} name="newService" />
        <Route path="/services/{id:Int}/edit" page={ServiceEditServicePage} name="editService" />
        <Route path="/services/{id:Int}" page={ServiceServicePage} name="service" />
        <Route path="/services" page={ServiceServicesPage} name="services" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Regions" titleTo="regions" buttonLabel="New Region" buttonTo="newRegion">
        <Route path="/regions/new" page={RegionNewRegionPage} name="newRegion" />
        <Route path="/regions/{id:Int}/edit" page={RegionEditRegionPage} name="editRegion" />
        <Route path="/regions/{id:Int}" page={RegionRegionPage} name="region" />
        <Route path="/regions" page={RegionRegionsPage} name="regions" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Cities" titleTo="cities" buttonLabel="New City" buttonTo="newCity">
        <Route path="/cities/new" page={CityNewCityPage} name="newCity" />
        <Route path="/cities/{id:Int}/edit" page={CityEditCityPage} name="editCity" />
        <Route path="/cities/{id:Int}" page={CityCityPage} name="city" />
        <Route path="/cities" page={CityCitiesPage} name="cities" />
      </Set>
      <Set wrap={ScaffoldLayout} title="TestStuffs" titleTo="testStuffs" buttonLabel="New TestStuff" buttonTo="newTestStuff">
        <Route path="/test-stuffs/new" page={TestStuffNewTestStuffPage} name="newTestStuff" />
        <Route path="/test-stuffs/{id:Int}/edit" page={TestStuffEditTestStuffPage} name="editTestStuff" />
        <Route path="/test-stuffs/{id:Int}" page={TestStuffTestStuffPage} name="testStuff" />
        <Route path="/test-stuffs" page={TestStuffTestStuffsPage} name="testStuffs" />
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="home" roles="admin">
        <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Games" titleTo="games" buttonLabel="New Game" buttonTo="newGame">
          <Route path="/admin/games/new" page={GameNewGamePage} name="newGame" />
          <Route path="/admin/games/{id:Int}/edit" page={GameEditGamePage} name="editGame" />
          <Route path="/admin/games/{id:Int}" page={GameGamePage} name="game" />
          <Route path="/admin/games" page={GameGamesPage} name="games" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Transports" titleTo="transports" buttonLabel="New Transport" buttonTo="newTransport">
          <Route path="/admin/transports/new" page={TransportNewTransportPage} name="newTransport" />
          <Route path="/admin/transports/{id:Int}/edit" page={TransportEditTransportPage} name="editTransport" />
          <Route path="/admin/transports/{id:Int}" page={TransportTransportPage} name="transport" />
          <Route path="/admin/transports" page={TransportTransportsPage} name="transports" />
        </Set>
        <Set wrap={ScaffoldLayout} title="CharacterFinanceses" titleTo="characterFinanceses" buttonLabel="New CharacterFinances" buttonTo="newCharacterFinances">
          <Route path="/admin/character-financeses/new" page={CharacterFinancesNewCharacterFinancesPage} name="newCharacterFinances" />
          <Route path="/admin/character-financeses/{id:Int}/edit" page={CharacterFinancesEditCharacterFinancesPage} name="editCharacterFinances" />
          <Route path="/admin/character-financeses/{id:Int}" page={CharacterFinancesCharacterFinancesPage} name="characterFinances" />
          <Route path="/admin/character-financeses" page={CharacterFinancesCharacterFinancesesPage} name="characterFinanceses" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Characters" titleTo="characters" buttonLabel="New Character" buttonTo="newCharacter">
          <Route path="/admin/characters/new" page={CharacterNewCharacterPage} name="newCharacter" />
          <Route path="/admin/characters/{id:Int}/edit" page={CharacterEditCharacterPage} name="editCharacter" />
          <Route path="/admin/characters/{id:Int}" page={CharacterCharacterPage} name="character" />
          <Route path="/admin/characters" page={CharacterCharactersPage} name="characters" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Items" titleTo="items" buttonLabel="New Item" buttonTo="newItem">
          <Route path="/admin/items/new" page={ItemNewItemPage} name="newItem" />
          <Route path="/admin/items/{id:Int}/edit" page={ItemEditItemPage} name="editItem" />
          <Route path="/admin/items/{id:Int}" page={ItemItemPage} name="item" />
          <Route path="/admin/items" page={ItemItemsPage} name="items" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
          <Route path="/admin/users/new" page={UserNewUserPage} name="newUser" />
          <Route path="/admin/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
          <Route path="/admin/users/{id:Int}" page={UserUserPage} name="user" />
          <Route path="/admin/users" page={UserUsersPage} name="users" />
        </Set>
        <Set wrap={ScaffoldLayout} title="AvailableTransports" titleTo="availableTransports" buttonLabel="New AvailableTransport" buttonTo="newAvailableTransport">
          <Route path="/available-transports/new" page={AvailableTransportNewAvailableTransportPage} name="newAvailableTransport" />
          <Route path="/available-transports/{id:Int}/edit" page={AvailableTransportEditAvailableTransportPage} name="editAvailableTransport" />
          <Route path="/available-transports/{id:Int}" page={AvailableTransportAvailableTransportPage} name="availableTransport" />
          <Route path="/available-transports" page={AvailableTransportAvailableTransportsPage} name="availableTransports" />
        </Set>
        <Set wrap={ScaffoldLayout} title="AvailableServices" titleTo="availableServices" buttonLabel="New AvailableService" buttonTo="newAvailableService">
          <Route path="/available-services/new" page={AvailableServiceNewAvailableServicePage} name="newAvailableService" />
          <Route path="/available-services/{id:Int}/edit" page={AvailableServiceEditAvailableServicePage} name="editAvailableService" />
          <Route path="/available-services/{id:Int}" page={AvailableServiceAvailableServicePage} name="availableService" />
          <Route path="/available-services" page={AvailableServiceAvailableServicesPage} name="availableServices" />
        </Set>
        <Set wrap={ScaffoldLayout} title="AvailableCities" titleTo="availableCities" buttonLabel="New AvailableCity" buttonTo="newAvailableCity">
          <Route path="/available-cities/new" page={AvailableCityNewAvailableCityPage} name="newAvailableCity" />
          <Route path="/available-cities/{id:Int}/edit" page={AvailableCityEditAvailableCityPage} name="editAvailableCity" />
          <Route path="/available-cities/{id:Int}" page={AvailableCityAvailableCityPage} name="availableCity" />
          <Route path="/available-cities" page={AvailableCityAvailableCitiesPage} name="availableCities" />
        </Set>
        <Set wrap={ScaffoldLayout} title="AvailableRegions" titleTo="availableRegions" buttonLabel="New AvailableRegion" buttonTo="newAvailableRegion">
          <Route path="/available-regions/new" page={AvailableRegionNewAvailableRegionPage} name="newAvailableRegion" />
          <Route path="/available-regions/{id:Int}/edit" page={AvailableRegionEditAvailableRegionPage} name="editAvailableRegion" />
          <Route path="/available-regions/{id:Int}" page={AvailableRegionAvailableRegionPage} name="availableRegion" />
          <Route path="/available-regions" page={AvailableRegionAvailableRegionsPage} name="availableRegions" />
        </Set>
      </Private>
      <Set wrap={KPWarzLayout}>
        <Private unauthenticated="home" roles="player">
          <Route path="/kp-warz-load-game" page={KpWarzLoadGamePage} name="kpWarzLoadGame" />
        </Private>
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Private unauthenticated="home" roles="player">
        <Set wrap={KPWarzGameLayout}>
          <Route path="/kpwarz-game" page={KpwarzGamePage} name="kpwarzGame" />
          <Route path="/character-creation" page={CharacterCreationPage} name="characterCreation" />
          <Route path="/character-intro/{id:int}" page={CharacterIntroPage} name="characterIntro" />
        </Set>
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
