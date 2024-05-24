import Layout from '@theme/Layout';
import styles from './demo.module.css';
import Link from '@docusaurus/Link';

const IconSvg = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z"
        fill="rgb(82, 196, 26)"
        stroke="rgb(82, 196, 26)"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M16 24L22 30L34 18" stroke="#FFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const IconNull = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="24"
        cy="24"
        r="20"
        fill="#b2b6b9"
        stroke="#b2b6b9"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="24" r="12" stroke="#FFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

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
          <div className={styles.navbarContainer}>
            <div className={styles.navbarTitle}>
              <p>跳转到对应的部分：</p>
            </div>
            <div className={styles.navbar}>
              <div className={styles.RichTextContainer}>
                <p>
                  <Link to="/demo">演示</Link>
                </p>
              </div>
              <div className={styles.RichTextContainer}>
                <p>
                  <Link to="/demo#integrations">集成</Link>
                </p>
              </div>
              <div className={styles.RichTextContainer}>
                <p>
                  <Link to="/demo#features">特性</Link>
                </p>
              </div>
            </div>
          </div>
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
        <div className={styles.integrations}>
          <div className={styles.integrationsTitle}>
            <h1 id="integrations">集成</h1>
            <p>如何将其与我的网站或应用程序集成？</p>
          </div>
          <div className={styles.integrationTypes}>
            <div className={styles.code}>
              <div className={styles.copyContainer}>
                <div className={styles.copyWrap}>
                  <div className={styles.copyContents}>
                    <div className={styles.copyTitle}>
                      <h2>自定义代码集成</h2>
                      <div className={styles.integrationOptions}>
                        <a className={styles.tagItem}>API</a>
                        <a className={styles.tagItem}>嵌入应用内</a>
                        <a className={styles.tagItem}>插件</a>
                        <a className={styles.tagItem}>可扩展</a>
                      </div>
                    </div>
                    <div className={styles.note}>
                      <p>
                        当根据您的特定技术栈进行定制时，Zhihui Editor
                        的全部潜力就会被释放，从而实现与您现有系统的深度集成和无缝融合。
                      </p>
                    </div>
                    <div className={styles.note}>
                      <h3>原生 JavaScript 集成</h3>
                      <p>
                        利用 Zhihui Editor 的动态设计功能提升您的网页。使用脚本标签合并 Zhihui Editor
                        来释放创意可能性的世界，无需任何框架。
                      </p>
                    </div>
                    <div className={styles.note}>
                      <h3>框架灵活性</h3>
                      <p>
                        Zhihui Editor 可以无缝融入您现有的 Vue 或 Angular 项目。利用我们的 SDK
                        可以轻松接入复杂的设计工具，通过自定义组件轻松集成。
                      </p>
                    </div>
                    <div className={styles.note}>
                      <h3>React 集成</h3>
                      <p>Zhihui Editor 基于 React 框架开发的， 使用 React 可以更灵活配置。</p>
                    </div>
                    <div className={styles.ctas}>
                      <div className={styles.ctasContainer}>
                        <Link to="/pricing" className={styles.primary}>
                          开始使用
                        </Link>
                      </div>
                      <div className={styles.ctasContainer}>
                        <Link to="/docs/intro" className={styles.secondary}>
                          阅读文档
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className={styles.sideCopy}>
                    <div className={styles.copyContentsV2}>
                      <div className={styles.copyTitle}>
                        <h3>案例</h3>
                      </div>
                      <div className={styles.copyList}>
                        <div className={styles.copyListItem}>
                          <div className={styles.svgIcon}>
                            <IconSvg></IconSvg>
                          </div>
                          <div className={styles.desc}>
                            <p>在线创意设计工具</p>
                          </div>
                        </div>
                        <div className={styles.copyListItem}>
                          <div className={styles.svgIcon}>
                            <IconSvg></IconSvg>
                          </div>
                          <div className={styles.desc}>
                            <p>印刷物料/打印服务</p>
                          </div>
                        </div>
                        <div className={styles.copyListItem}>
                          <div className={styles.svgIcon}>
                            <IconSvg></IconSvg>
                          </div>
                          <div className={styles.desc}>
                            <p>数字资产管理/多人协作/成员管理</p>
                          </div>
                        </div>
                        <div className={styles.copyListItem}>
                          <div className={styles.svgIcon}>
                            <IconSvg></IconSvg>
                          </div>
                          <div className={styles.desc}>
                            <p>任何你能想象到的</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.copyContentsV2}>
                      <div className={styles.copyTitle}>
                        <h3>能得到什么</h3>
                      </div>
                      <div className={styles.copyList}>
                        <div className={styles.copyListItem}>
                          <div className={styles.svgIcon}>
                            <IconSvg></IconSvg>
                          </div>
                          <div className={styles.desc}>
                            <p>完整的图形设计编辑套件</p>
                          </div>
                        </div>
                        <div className={styles.copyListItem}>
                          <div className={styles.svgIcon}>
                            <IconSvg></IconSvg>
                          </div>
                          <div className={styles.desc}>
                            <p>海量素材供应</p>
                          </div>
                        </div>
                        <div className={styles.copyListItem}>
                          <div className={styles.svgIcon}>
                            <IconSvg></IconSvg>
                          </div>
                          <div className={styles.desc}>
                            <p>特色AI功能</p>
                          </div>
                        </div>
                        <div className={styles.copyListItem}>
                          <div className={styles.svgIcon}>
                            <IconSvg></IconSvg>
                          </div>
                          <div className={styles.desc}>
                            <p>支持深度定制</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.nocode}>
              <div className={styles.copyContainer}>
                <div className={styles.copyWrap}>
                  <div className={styles.copyContents}>
                    <div className={styles.copyTitle}>
                      <h2>无代码集成</h2>
                      <div className={styles.integrationOptions}>
                        <a className={styles.tagItem}>嵌入</a>
                        <a className={styles.tagItem}>按钮</a>
                        <a className={styles.tagItem}>子域</a>
                      </div>
                    </div>
                    <div className={styles.note}>
                      <p>
                        希望通过图形编辑功能升级您的业务，但没有可以依赖的开发团队？通过 iframe 轻松嵌入 Zhihui
                        Editor，通过单击按钮触发编辑器或将其托管在子域上。
                      </p>
                    </div>
                    <div className={styles.note}>
                      <p>选择我们的商业版，我们将帮助您自定义并快速部署 Zhihui Editor。</p>
                    </div>
                    <div className={styles.ctas}>
                      <div className={styles.ctasContainerV2}>
                        <Link to="/pricing" className={styles.primary}>
                          开始使用
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.sideCopy}>
                    <div className={styles.copyContentsV2}>
                      <div className={styles.copyTitle}>
                        <h3>案例</h3>
                      </div>
                      <div className={styles.copyList}>
                        <div className={styles.copyListItem}>
                          <div className={styles.svgIcon}>
                            <IconSvg></IconSvg>
                          </div>
                          <div className={styles.desc}>
                            <p>嵌入式设计编辑器</p>
                          </div>
                        </div>
                        <div className={styles.copyListItem}>
                          <div className={styles.svgIcon}>
                            <IconSvg></IconSvg>
                          </div>
                          <div className={styles.desc}>
                            <p>模板库</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.copyContentsV2}>
                      <div className={styles.copyTitle}>
                        <h3>能得到什么</h3>
                      </div>
                      <div className={styles.copyList}>
                        <div className={styles.copyListItem}>
                          <div className={styles.svgIcon}>
                            <IconSvg></IconSvg>
                          </div>
                          <div className={styles.desc}>
                            <p>完整的图形设计编辑套件</p>
                          </div>
                        </div>
                        <div className={styles.copyListItem}>
                          <div className={styles.svgIcon}>
                            <IconNull></IconNull>
                          </div>
                          <div className={styles.desc}>
                            <p>无用户授权/配置文件</p>
                          </div>
                        </div>
                        <div className={styles.copyListItem}>
                          <div className={styles.svgIcon}>
                            <IconNull></IconNull>
                          </div>
                          <div className={styles.desc}>
                            <p>无云存储（媒体保存在本地）</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.features}>
          <div className={styles.featuresContainer}>
            <div className={styles.integrationsTitle} style={{ gap: 32 }}>
              <div style={{ textAlign: 'center' }}>
                <h1 id="features">特性</h1>
                <p>Zhihui Editor 一些好用的开箱即用功能。</p>
              </div>
              <div className={styles.featuresBtn}>
                <Link to="/docs/intro" className={styles.secondary}>
                  阅读文档
                </Link>
              </div>
            </div>
            <div className={styles.featuresList}>
              <div className={styles.featuresCol}>
                <div className={styles.featuresItem}>
                  <div className={styles.featuresItemTitle}>
                    <h3>模板编辑</h3>
                  </div>
                  <div className={styles.featuresNote}>
                    <p>编辑文本和图像</p>
                  </div>
                  <div className={styles.featuresNote}>
                    <p>智能调整尺寸</p>
                  </div>
                </div>
                <div className={styles.featuresItem}>
                  <div className={styles.featuresItemTitle}>
                    <h3>模板</h3>
                  </div>
                  <div className={styles.featuresNote}>
                    <p>创建模板</p>
                  </div>
                  <div className={styles.featuresNote}>
                    <p>海量设计模板</p>
                  </div>
                  <div className={styles.featuresNote}>
                    <p>智能批量套版</p>
                  </div>
                </div>
                <div className={styles.featuresItem}>
                  <div className={styles.featuresItemTitle}>
                    <h3>公用事业</h3>
                  </div>
                  <div className={styles.featuresNote}>
                    <p>图表</p>
                  </div>
                  <div className={styles.featuresNote}>
                    <p>二维码/条形码</p>
                  </div>
                  <div className={styles.featuresNote}>
                    <p>签名</p>
                  </div>
                </div>
                <div className={styles.featuresItem}>
                  <div className={styles.featuresItemTitle}>
                    <h3>权限管理</h3>
                  </div>
                  <div className={styles.featuresNote}>
                    <p>用户角色</p>
                  </div>
                  <div className={styles.featuresNote}>
                    <p>成员管理</p>
                  </div>
                  <div className={styles.featuresNote}>
                    <p>团队协作</p>
                  </div>
                </div>
              </div>
              <div className={styles.featuresCol2}>
                <div className={styles.featuresItem}>
                  <div className={styles.featuresItemTitle}>
                    <h3>数据存储</h3>
                  </div>
                  <div className={styles.featuresNote}>
                    <p>素材上传</p>
                  </div>
                  <div className={styles.featuresNote}>
                    <p>资产安全存储</p>
                  </div>
                  <div className={styles.featuresNote}>
                    <p>数字资产管理</p>
                  </div>
                </div>
                <div className={styles.featuresItem}>
                  <div className={styles.featuresItemTitle}>
                    <h3>AI功能</h3>
                  </div>
                  <div className={styles.featuresNote}>
                    <p>智能抠图</p>
                  </div>
                  <div className={styles.featuresNote}>
                    <p>图像动漫化</p>
                  </div>
                  <div className={styles.featuresNote}>
                    <p>图像生成</p>
                  </div>
                  <div className={styles.featuresNote}>
                    <p>自动尺寸延展</p>
                  </div>
                </div>
                <div className={styles.featuresItem}>
                  <div className={styles.featuresItemTitle}>
                    <h3>文件解析</h3>
                  </div>
                  <div className={styles.featuresNote}>
                    <p>企业资产解析为模板</p>
                  </div>
                  <div className={styles.featuresNote}>
                    <p>封装的文件解析能力</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
