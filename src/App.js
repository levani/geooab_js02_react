import './App.scss';
import Header from './components/Header';
import TodoApp from './components/TodoApp';
import Registration from './components/Registration';
import Counter from './components/Counter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About';
import Users from './pages/Users';
import Home from './pages/Home';
import Product from './pages/Product';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { useState } from 'react';
import ThemeContext from './themeContext';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: require('./i18n/en.json')
      },
      ka: {
        translation: require('./i18n/ka.json')
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

function App() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{
      theme: theme,
      setTheme: setTheme
    }}>
      <TodoApp />
      {/* <Registration /> */}
      {/* <Counter /> */}
    </ThemeContext.Provider>
  )

  // return (
  //   <Router>
  //     <div className="App">

  //       <header>
  //         <nav>
  //           <ul>
  //             <li>
  //               <Link to="/">{t('home')}</Link>
  //             </li>
  //             <li>
  //               <Link to="/about">{t('about')}</Link>
  //             </li>
  //             <li>
  //               <Link to="/users">Users</Link>
  //             </li>
  //             <li>
  //               <Link to="/product/1233">Product</Link>
  //             </li>
  //           </ul>
  //         </nav>
  //       </header>

  //       <button onClick={() => i18n.changeLanguage('en')}>Eng</button>
  //       <button onClick={() => i18n.changeLanguage('ka')}>Geo</button>

  //       <Switch>
  //         <Route path="/about">
  //           <About />
  //         </Route>
  //         <Route path="/users">
  //           <Users />
  //         </Route>
  //         <Route path="/product/:id">
  //           <Product />
  //         </Route>
  //         <Route path="/">
  //           <Home />
  //         </Route>
  //       </Switch>
      
  //     </div>
  //   </Router>
  // );
}

export default App;
