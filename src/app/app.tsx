export const App: React.FC = () => {
  const date = new Date();

  return (
    <div className="container">
      <header className="p-3 mb-4 border-bottom d-flex justify-content-between align-items-center">
        <h1>Michael Bradvica</h1>
        <div className="d-flex">
          <div className="p-2">
            <i className="bi bi-linkedin fs-4"></i>
          </div>
          <div className="p-2">
            <i className="bi bi-twitter-x fs-4"></i>
          </div>
          <div className="p-2">
            <i className="bi bi-code-slash fs-4"></i>
          </div>
          <div className="p-2">
            <i className="bi bi-github fs-4"></i>
          </div>
          <div className="p-2">
            <i className="bi bi-youtube fs-4"></i>
          </div>
        </div>
      </header>
      <main>
        <div className="p-5 mb-4 bg-body-tertiary">
          <div className="container">
            <h2 className="h3">Libraries</h2>
            <p className="col-md-8 fs-5">
              The Simplex Standard for .NET is the foundation for all great
              software.
            </p>
            <ul>
              <li>
                <a
                  href="https://github.com/mjbradvica/NMediation"
                  target="_blank"
                >
                  NMediation
                </a>
                - Mediation and Publishing. Free forever.
              </li>
              <li>
                <a
                  href="https://github.com/mjbradvica/NPredicateBuilder"
                  target="_blank"
                >
                  NPredicateBuilder
                </a>
                - Predicates for LINQ & EF.
              </li>
              <li>
                <a
                  href="https://github.com/mjbradvica/SimpleServiceClient"
                  target="_blank"
                >
                  SimpleServiceClient
                </a>
                - A middle ground for HTTP clients.
              </li>
              <li>
                <a
                  href="https://github.com/mjbradvica/ClearDomain"
                  target="_blank"
                >
                  ClearDomain
                </a>
                - Foundational classes for all DDD projects.
              </li>
              <li>
                <a
                  href="https://github.com/mjbradvica/MediationBuddy"
                  target="_blank"
                >
                  MediationBuddy
                </a>
                - An opinionated implementation of NMediation.
              </li>
              <li>
                <a
                  href="https://github.com/mjbradvica/FactoryFoundation"
                  target="_blank"
                >
                  FactoryFoundation
                </a>
                - A micro-library for factories.
              </li>
              <li>
                <a
                  href="https://github.com/mjbradvica/ChainStrategy"
                  target="_blank"
                >
                  ChainStrategy
                </a>
                - Chain of Responsibility & Strategy patterns for .NET
              </li>
              <li>
                <a
                  href="https://github.com/mjbradvica/RapidLaunch"
                  target="_blank"
                >
                  RapidLaunch
                </a>
                - Fast and flexible persistence.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="pt-3 border-top text-body-tertiary">
        <p>&#169; {date.getFullYear().toString()} - All Rights Reserved</p>
      </footer>
    </div>
  );
};
