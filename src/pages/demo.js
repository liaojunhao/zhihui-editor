import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './demo.module.css';

export default function Demo() {
  return (
    <Layout>
      <div className={styles.wrap}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            <div className={styles.leftContent}>
              <div className={styles.leftSsr}>
                <h1 className={styles.framerText}>Zhihui Editor Demo</h1>
              </div>
            </div>
            <div className={styles.rightContent}>
              <div className={styles.ssrVariant}>
                <div className={styles.decoration}>
                  <p className={styles.decorationText}>
                    探索最终用户的功能。该演示抓住了 Zhihui Editor 所提供的核心功能。要了解其背后的工作原理，请
                    <Link className="" to="/docs/intro">
                      浏览文档
                    </Link>
                    。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.navbarContainer}></div>
        </div>
        <div className={styles.sectionBox}>
          <div className={styles.container}>
            <div className={styles.containerBox}>
              <div className={styles.embedContainer}>
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <iframe
                    src="https://static.taishan.qq.com/h5/editor/index.html"
                    style={{
                      width: '100%',
                      height: 750,
                      border: 0,
                      borderRadius: 4,
                      overflow: 'hidden'
                    }}
                    title="StackBlitz Example"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
