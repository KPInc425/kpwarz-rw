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
      </Private>
      <Set wrap={KPWarzLayout}>
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Set wrap={KPWarzGameLayout}>
        <Route path="/kpwarz-game" page={KpwarzGamePage} name="kpwarzGame" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
