import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageLogos from '@site/src/components/HomepageLogos';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            快速上手
          </Link>
          <Link className={`button button--lg ${styles.btn}`} to="/demo">
            演示Demo
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`智绘平台图形编辑器SDK`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className={styles.sectionBox}>
          <div className={styles.sectionHeaderLine}></div>
          <h3 className={styles.sectionHeaderTitle}>主要优势</h3>
          <div className={styles.sectionHeaderLine}></div>
        </div>
        <HomepageFeatures />
        <div className={styles.gettingStartedSection}>
          <div className={styles.sectionBox}>
            <div className={styles.sectionHeaderLine}></div>
            <h3 className={styles.sectionHeaderTitle}>谁在使用</h3>
            <div className={styles.sectionHeaderLine}></div>
          </div>
          <HomepageLogos></HomepageLogos>
        </div>
        <div>
          <div className={styles.sectionBox}>
            <div className={styles.sectionHeaderLine}></div>
            <h3 className={styles.sectionHeaderTitle}>共享共建</h3>
            <div className={styles.sectionHeaderLine}></div>
          </div>
          <div className={styles.contributing}>
            <p className={styles.contributingText}>
              Zhihui Editor
              还处于开源初级阶段，以较低的成本方式孵化着，我们衷心的希望更多小伙伴可以和我们一同建设，如果您有兴趣欢迎
              <Link to="/contact"> 加入我们</Link>。
            </p>
          </div>
          <div className={styles.projectAndAuthorInfo}>
            <div className={styles.item} style={{ width: '20%' }}>
              <div className={styles.authorTitle}>设计师</div>
              <div className={styles.authorArea}>
                <div className={styles.authorWrapper}>
                  <div className={styles.thumbNail} style={{ border: '1px solid #3a2be0', width: 48, height: 48 }}>
                    <img src="https://avatars.githubusercontent.com/rayleeli"></img>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.authorTitle}>开发工程师</div>
              <div className={styles.authorArea}>
                <div className={styles.authorWrapper}>
                  <div className={styles.thumbNail} style={{ border: '1px solid #3a2be0', width: 48, height: 48 }}>
                    <a href="https://github.com/liaojunhao">
                      <img src="https://avatars.githubusercontent.com/rayleeli" alt="李四"></img>
                    </a>
                  </div>
                </div>
                <div className={styles.authorWrapper}>
                  <div className={styles.thumbNail} style={{ border: '1px solid #3a2be0', width: 48, height: 48 }}>
                    <a href="https://github.com/liaojunhao">
                      <img src="https://avatars.githubusercontent.com/rayleeli" alt="张三"></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
