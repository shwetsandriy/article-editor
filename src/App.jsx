import React, { useState, useEffect } from 'react';
import './components/Sidebar.css';
import { HashRouter as Router, Routes, Route, useParams, Navigate, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ArticleViewer from './components/ArticleViewer';
import { getArticlesFiles } from './utils/getArticlesTree';

function findFirstFile(tree) {
  if (tree.files?.[0]) return tree.files[0].path;
  for (const key in tree) {
    const res = findFirstFile(tree[key]);
    if (res) return res;
  }
  return null;
}

function ViewerWrapper() {
  const { filePath = '' } = useParams();
  return (
    <ArticleViewer
      filePath={decodeURIComponent(filePath)}
      onNavigate={(path) => {
        window.location.href = `/article-editor/${encodeURIComponent(path)}`;
      }}
    />
  );
}

function HomeLayout({ articleTree, articlePath, setArticlePath, sidebarOpen, setSidebarOpen, isExternalView = false }) {
  const navigate = useNavigate();
  const { filePath = '' } = useParams();

  const effectivePath = isExternalView
    ? decodeURIComponent(filePath)
    : findFirstFile(articleTree);
  return (
    <>
      <header className="site-header">
        <div className="header-content">
          {!sidebarOpen && (
            <button
              className="sidebar-toggle-button"
              onClick={() => setSidebarOpen(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 18H10" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12L16 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          )}

          {sidebarOpen && window.innerWidth <= 768 && (
            <div className="overlay" onClick={() => setSidebarOpen(false)} />
          )}

        <svg  onClick={() => window.location.href = '/article-editor/'} style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="107" height="20"
            viewBox="0 0 107 20" fill="none">
            <path d="M39.6146 0.0487242C38.5964 -0.044712 37.5717 0.0297204 36.5503 0.00438177C36.5503 2.73462 36.5503 5.46485 36.5503 8.19509C35.9069 7.14354 34.8501 6.33745 33.6019 6.16325C32.5579 6.04289 31.4609 6.04606 30.4636 6.41663C28.9065 6.95825 27.7452 8.28061 27.1404 9.75975C26.497 11.3149 26.4374 13.0363 26.5838 14.6913C26.7672 16.4127 27.5489 18.1468 29.0175 19.1635C30.277 20.0536 31.9386 20.1407 33.4153 19.8524C34.7729 19.5563 35.8619 18.5855 36.5552 17.4342C36.5439 18.1848 36.5552 19.2493 36.5552 20C37.5766 19.9857 38.5996 20.0143 39.621 20C39.5974 13.4595 39.5953 6.59031 39.6146 0.0487242ZM36.301 15.2915C35.894 16.3636 34.9691 17.3059 33.7933 17.5086C32.9456 17.6258 32.0239 17.5656 31.3017 17.0699C30.2577 16.3826 29.7623 15.1157 29.669 13.9264C29.5837 12.6246 29.6883 11.2341 30.3912 10.0987C30.6194 9.71206 30.9282 9.37741 31.2972 9.11674C31.6662 8.85607 32.0871 8.67527 32.5322 8.58625C33.3365 8.47381 34.2147 8.50074 34.9321 8.92832C35.4613 9.24255 35.8943 9.69174 36.1854 10.2284C36.4765 10.765 36.6148 11.3692 36.5857 11.9769C36.5471 13.0823 36.7224 14.2336 36.301 15.2915Z"
                  fill="#212121"></path>
            <path d="M52.363 16.5087C51.4215 17.0193 50.4556 17.5473 49.3607 17.6761C48.0309 17.8333 46.5298 17.7516 45.4692 16.8669C44.5342 16.141 44.1638 14.9531 44.1345 13.8344C47.2347 13.847 50.3201 13.8265 53.4138 13.8454C53.3926 12.7455 53.4856 11.6158 53.2049 10.5332C52.8672 9.00746 51.9453 7.52261 50.4605 6.80768C49.271 6.17918 47.8726 6.14147 46.5542 6.26088C44.6746 6.47929 43.007 7.64831 42.041 9.18972C41.0066 10.794 40.876 12.7596 41.0833 14.5917C41.2774 16.1426 41.9529 17.7013 43.2273 18.7116C44.3694 19.6308 45.8787 20.0409 47.3505 19.9953C48.9463 20.0362 50.5943 19.8178 52.0171 19.0856C52.1802 18.9929 52.4299 18.8923 52.3695 18.6613C52.3777 17.9432 52.3679 17.2252 52.363 16.5087ZM45.5589 9.13316C46.6016 8.28467 48.3148 8.21554 49.3754 9.07031C50.1912 9.7271 50.4066 10.7987 50.4507 11.7619C48.3426 11.7839 46.2344 11.7619 44.1263 11.7745C44.2928 10.7783 44.7268 9.78209 45.5589 9.13316Z"
                  fill="#212121"></path>
            <path d="M53.4121 6.21215C54.4996 6.21215 55.5887 6.20228 56.6762 6.21215C57.5134 9.08812 58.4053 11.946 59.2581 14.8154C59.5577 15.6974 59.7926 16.6023 59.9607 17.522C60.1986 16.0733 60.7008 14.6986 61.1312 13.3075C61.8729 10.9484 62.6151 8.5833 63.3578 6.21215C64.4109 6.20064 65.464 6.21215 66.5156 6.21215C64.8334 10.8015 63.1356 15.386 61.4864 19.9885C60.3988 20.0083 59.3082 19.9885 58.2207 20C56.6105 15.4057 55.0254 10.8048 53.4121 6.21215Z"
                  fill="#212121"></path>
            <path d="M72.4051 6.65482C73.3015 6.11467 74.4643 6.10024 75.4608 6.4144C75.4863 7.41457 75.4608 8.41794 75.4829 9.41971C74.4406 8.87315 73.0315 8.82025 72.0877 9.56397C70.8705 10.4808 70.4749 12.0211 70.4631 13.4284C70.4393 15.6195 70.4631 17.809 70.4631 20C69.3783 20 68.2918 20 67.207 20C67.207 15.5121 67.207 11.0242 67.207 6.53621C68.2935 6.53621 69.3783 6.53621 70.4647 6.53621C70.4647 7.38411 70.4325 8.23201 70.4919 9.07831C70.9282 8.15027 71.4663 7.19017 72.4289 6.65803L72.4051 6.65482Z"
                  fill="#212121"></path>
            <path d="M85.8532 8.2564C85.2802 7.24187 84.1642 6.59326 82.9951 6.37182C80.6651 5.96144 78.2571 6.32295 76.1746 7.39578C76.12 8.29566 76.1515 9.19869 76.1564 10.1001C77.0903 9.39814 78.1435 8.79822 79.3373 8.59876C80.3954 8.41502 81.6158 8.35063 82.5232 8.99452C83.2336 9.51906 83.4008 10.4237 83.4373 11.2277L79.2562 11.7947C78.2047 11.9392 77.1516 12.247 76.2988 12.8673C75.5382 13.4336 75.0351 14.2546 74.893 15.1618C74.6165 16.4889 74.893 18.0122 75.9759 18.9639C77.2062 20.0287 79.0542 20.1905 80.6124 19.8198C81.8311 19.5277 82.7468 18.642 83.4273 17.6777C83.4273 18.3389 83.419 19.3375 83.4273 20.0002H86.5122C86.5122 17.5503 86.5122 14.766 86.5122 12.3161C86.5221 10.9482 86.5768 9.4908 85.8532 8.2564ZM83.275 15.4335C83.1153 15.9785 82.8012 16.4716 82.3668 16.8593C81.9325 17.2469 81.3944 17.5142 80.8111 17.6322C79.9599 17.7892 78.9565 17.6651 78.3505 17.026C77.7692 16.4417 77.751 15.5293 78.0557 14.8273C78.3455 14.185 79.1055 13.9368 79.7629 13.7704C80.975 13.5395 82.2086 13.4343 83.4273 13.249C83.4124 13.9745 83.4985 14.7205 83.275 15.4335Z"
                  fill="#212121"></path>
            <path d="M88.5859 4.50073C89.7354 4.50073 90.8847 4.50073 92.0341 4.50073C92.0269 9.78805 92.0269 14.7133 92.0341 20.0006C90.8847 20.0006 89.7353 20.0006 88.5876 20.0006C88.5876 14.7133 88.5876 9.42599 88.5876 4.13867L88.5859 4.50073Z"
                  fill="#212121"></path>
            <path d="M88.5859 0C89.7354 0 90.8848 0 92.0342 0C92.027 0.919533 92.027 2.08047 92.0342 3C90.8848 3 89.7354 3 88.5877 3C88.5877 2.08047 88.5877 0.919533 88.5877 0H88.5859Z"
                  fill="#212121"></path>
            <path d="M100.79 6.35683C102.202 6.05557 103.855 6.15011 104.973 7.18689C106.129 8.24611 106.47 9.91105 106.514 11.4254C106.521 14.2841 106.514 17.1413 106.514 20H103.518C103.518 17.5964 103.525 15.2023 103.518 12.8035C103.481 11.7042 103.475 10.4943 102.805 9.57293C102.136 8.65153 100.826 8.52013 99.836 8.90311C98.5655 9.4191 97.8314 10.826 97.8314 12.1865C97.8235 14.7905 97.8314 17.3945 97.8314 20H94.793V6.53951H97.8282C97.8282 7.26702 97.8204 7.99292 97.8423 8.71883C98.5263 7.62436 99.5176 6.66129 100.79 6.36324V6.35683Z"
                  fill="#212121"></path>
            <path d="M3.45391 11.8989C5.84979 10.4059 8.44058 9.32607 11.0341 8.27539C10.7253 11.2181 10.1283 14.1175 9.25274 16.9253C8.76274 18.6221 7.23858 20.057 5.53304 19.9842C3.38352 20.1996 1.3802 18.0953 1.3802 15.8077C1.36157 15.0164 1.54503 14.2347 1.91063 13.5477C2.27623 12.8606 2.80999 12.2944 3.45391 11.9106V11.8989Z"
                  fill="#212121"></path>
            <path d="M15.0772 10.9863C17.1259 9.96318 19.2301 9.05812 21.3798 8.27539C21.0671 11.191 20.4162 14.0593 19.4403 16.821C18.6288 18.9848 15.8373 19.9778 13.8654 18.8234C12.0612 17.8742 11.1604 15.4451 12.1045 13.5768C12.6049 12.261 13.9384 11.6264 15.0799 10.9863H15.0772Z"
                  fill="#212121"></path>
            <path d="M1.7951 3.0884C4.03853 1.76617 6.52089 0.890284 8.96552 0C8.67659 2.40874 8.12791 4.78261 7.32821 7.08388C6.88054 8.49489 5.46707 9.69954 3.8675 9.64194C1.85546 9.82432 -0.00568036 8.08215 0.0018648 6.18879C-0.0190619 5.56591 0.136465 4.94916 0.452054 4.40353C0.767643 3.85789 1.23161 3.40356 1.7951 3.0884Z"
                  fill="#212121"></path>
          </svg>
        </div>
      </header>

      <div className={`layout ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Sidebar
          tree={articleTree}
          onSelect={(path) => {
            navigate(`/${encodeURIComponent(path)}`);
            setArticlePath(path);
            if (window.innerWidth <= 768) setSidebarOpen(false);
          }}
          setSidebarOpen={setSidebarOpen}
          selectedPath={articlePath}
        />
        <div className="page-wrapper">
          <ArticleViewer filePath={effectivePath} onNavigate={(path) => {
            window.location.href = `/article-editor/${encodeURIComponent(path)}`;
          }}  />
        </div>
      </div>
    </>
  );
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth > 768);
  const [articleTree, setArticleTree] = useState({});
  const [articlePath, setArticlePath] = useState(null);
  useEffect(() => {
    const handleResize = () => setSidebarOpen(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    async function buildTree() {
      const files = getArticlesFiles();
      const tree = {};
      const visibleTree = {};
      const allFiles = {};
  
      for (const fullPath in files) {
        const relativePath = fullPath.replace('../articles/', '');
        const parts = relativePath.split('/');
        const fileName = parts.pop().replace('.md', '');
        const isHidden = fileName.startsWith('_');
  
        const fileContent = await files[fullPath]();
        const firstLine = fileContent.trim().split('\n')[0];
        const displayName = firstLine.replace(/^#\s*/, '').trim() || fileName;
  
        const fileMeta = {
          name: fileName,
          path: relativePath,
          displayName,
          hidden: isHidden,
        };
  
        let currentAll = tree;
        for (const folder of parts) {
          if (!currentAll[folder]) currentAll[folder] = {};
          currentAll = currentAll[folder];
        }
        if (!currentAll.files) currentAll.files = [];
        currentAll.files.push(fileMeta);
  
        if (!isHidden) {
          let currentVisible = visibleTree;
          for (const folder of parts) {
            if (!currentVisible[folder]) currentVisible[folder] = {};
            currentVisible = currentVisible[folder];
          }
          if (!currentVisible.files) currentVisible.files = [];
          currentVisible.files.push(fileMeta);
        }
      }
  
      setArticleTree(visibleTree);
      const firstFile = findFirstFile(visibleTree);
      if (firstFile) setArticlePath(firstFile);
    }
  
    buildTree();
  }, []);

  // const [articlePath, setArticlePath] = useState(findFirstFile(articleTree));

  useEffect(() => {
    const handleResize = () => setSidebarOpen(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomeLayout
              articleTree={articleTree}
              articlePath={articlePath}
              setArticlePath={setArticlePath}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          }
        />
        <Route
          path="/:filePath/*"
          element={
            <HomeLayout
              articleTree={articleTree}
              articlePath={articlePath}
              setArticlePath={setArticlePath}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              isExternalView
            />
          }
        />
        <Route path="*" element={<Navigate to={`/${encodeURIComponent(articlePath)}`} replace />} />
    </Routes>
    </Router>
  );
}

export default App;

