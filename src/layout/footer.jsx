function Footer () {
    return (
        <footer className="page-footer light-blue darken-4">
          <div className="footer-copyright">
            <div className="container">
              <span>© {new Date().getFullYear()} Copyright Text</span>
              <a className="grey-text text-lighten-4 right" href="https://github.com/stanislaviw/reactMovies">Repositorie</a>
            </div>
          </div>
        </footer>
    )
}

export {Footer}