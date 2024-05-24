import Layout from '@theme/Layout';
import styles from './pricing.module.css';
import Link from '@docusaurus/Link';

const IconCheck = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 24L20 34L40 14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default function Pricing() {
  return (
    <Layout title={`订阅`}>
      <div className={styles.container}>
        <main className={styles.wrap}>
          <div className={styles.top}>
            <section className={styles.topBox}>
              <h1>订阅合适的方案</h1>
              <div className={styles.subtitle}>
                <div className={styles.subtitleBox}>
                  <p>无限免费开发试用</p>
                  <p>买之前先喜欢</p>
                </div>
              </div>
            </section>
          </div>
          <div className={styles.pricingVersions}>
            {/* 标准版 */}
            <div className={styles.pricingProduct}>
              <div className={styles.pricingProductMain}>
                <div className={styles.pricingProductMainVersion} style={{ background: '#8b9bc0' }}>
                  <h4 className={styles.versionTitle}>
                    <span className={styles.versionTitleText}>标准版</span>
                    <span className={styles.versionLimit}>5 人使用</span>
                  </h4>
                  <div className={styles.versionDescription}> 适合设计师、营销运营人员等小团队使用 </div>
                  <div className={styles.versionTags}>
                    <div className={styles.versionTag}>正版模板</div>
                    <div className={styles.versionTag}>商业许可</div>
                    <div className={styles.versionTag}>无水印</div>
                  </div>
                </div>
                <div className={styles.pricingProductMainVsaluation}>
                  <div className={styles.valuationPrice}>
                    <div className={styles.valuationInfo}>
                      <span className={styles.valuationSymbol}>￥</span>
                      <div className={styles.valuationValue}> 9.9 </div>
                      <div className={styles.valuationUnit}> /月起 </div>
                    </div>
                  </div>
                  <div className={styles.valuationButton}>
                    <div>
                      <div
                        className={styles.valuationCheckout}
                        style={{ background: '#8b9bc0', borderColor: '#8b9bc0' }}
                      >
                        <span>选择标准版</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pricingProductEntitlement}>
                <div className={styles.atomContainer}>
                  <div className={styles.atomTitle}>
                    <span className={styles.atomName}> 核心权益 </span>
                  </div>
                  <div className={styles.entitlementEntitlements}>
                    <div className={styles.entitlementItem} style={{ color: '#8b9bc0' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 全量正版模板 </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#8b9bc0' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 无水印下载 </span>
                    </div>

                    <div className={styles.entitlementItem} style={{ color: '#8b9bc0' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 个人用途商用授权</span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#8b9bc0' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 存储空间 5G </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#8b9bc0' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> PSD 文件转成在线模板 </span>
                    </div>
                  </div>
                </div>
                <div className={styles.atomContainer} style={{ paddingTop: 20 }}>
                  <div className={styles.atomTitle}>
                    <span className={styles.atomName}> AI功能 </span>
                  </div>
                  <div className={styles.entitlementEntitlements}>
                    <div className={styles.entitlementItem} style={{ color: '#8b9bc0' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 智能抠图 / 60次 </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#8b9bc0' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 风格动漫化 / 30次 </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#8b9bc0' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 智能消除笔 / 30次 </span>
                    </div>
                  </div>
                </div>
                <div className={styles.baseContainer} style={{ paddingTop: 20 }}>
                  <div className={styles.atomTitle}>
                    <span className={styles.atomName}> 服务 </span>
                  </div>
                  <div className={styles.entitlementEntitlements}>
                    <div className={styles.entitlementItem} style={{ color: '#3a2be0' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 人工客服，在线答疑</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 专业版 */}
            <div className={styles.pricingProduct}>
              <div className={styles.pricingProductMain}>
                <div className={styles.pricingProductMainVersion} style={{ background: '#3a2be0' }}>
                  <h4 className={styles.versionTitle}>
                    <span className={styles.versionTitleText}>专业版</span>
                    <span className={styles.versionLimit}>30 人使用</span>
                  </h4>
                  <div className={styles.versionDescription}> 适合有协作需求的团队或中小企业 </div>
                  <div className={styles.versionTags}>
                    <div className={styles.versionTag}>企业商用</div>
                    <div className={styles.versionTag}>多人协作</div>
                    <div className={styles.versionTag}>团队资产管理</div>
                  </div>
                </div>
                <div className={styles.pricingProductMainVsaluation}>
                  <div className={styles.valuationPrice}>
                    <div className={styles.valuationInfo}>
                      <span className={styles.valuationSymbol}>￥</span>
                      <div className={styles.valuationValue}> 109 </div>
                      <div className={styles.valuationUnit}> / 6个月起 </div>
                    </div>
                  </div>
                  <div className={styles.valuationButton}>
                    <div>
                      <div
                        className={styles.valuationCheckout}
                        style={{ background: '#3a2be0', borderColor: '#3a2be0' }}
                      >
                        <span>选择专业版</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pricingProductEntitlement}>
                <div className={styles.atomContainer}>
                  <div className={styles.atomTitle}>
                    <span className={styles.atomName}> 核心权益 </span>
                  </div>
                  <div className={styles.entitlementEntitlements}>
                    <div className={styles.entitlementItem} style={{ color: '#3a2be0' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 全量正版模板素材 </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#3a2be0' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 无水印下载 </span>
                    </div>

                    <div className={styles.entitlementItem} style={{ color: '#3a2be0' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 全用途商用授权 </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#3a2be0' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 团队空间数量 5个</span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#3a2be0' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 存储空间20GB/团队 </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#3a2be0' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> PSD/figma/Sketch 文件转成在线模板 </span>
                    </div>
                  </div>
                </div>
                <div className={styles.atomContainer} style={{ paddingTop: 20 }}>
                  <div className={styles.atomTitle}>
                    <span className={styles.atomName}> AI功能 </span>
                  </div>
                  <div className={styles.entitlementEntitlements}>
                    <div className={styles.entitlementItem} style={{ color: '#3a2be0' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 智能抠图 / 120次 </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#3a2be0' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 风格动漫化 / 60次 </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#3a2be0' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 智能消除笔 / 60次 </span>
                    </div>
                  </div>
                </div>
                <div className={styles.baseContainer} style={{ paddingTop: 20 }}>
                  <div className={styles.atomTitle}>
                    <span className={styles.atomName}> 服务 </span>
                  </div>
                  <div className={styles.entitlementEntitlements}>
                    <div className={styles.entitlementItem} style={{ color: '#3a2be0' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 人工客服，在线答疑</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 尊享版 */}
            <div className={styles.pricingProduct}>
              <div className={styles.pricingProductMain}>
                <div className={styles.pricingProductMainVersion} style={{ background: '#dfb053' }}>
                  <h4 className={styles.versionTitle}>
                    <span className={styles.versionTitleText}>尊享版</span>
                    <span className={styles.versionLimit}>100 人使用</span>
                  </h4>
                  <div className={styles.versionDescription}>
                    适合多团队、多部门协作管理的中大型企业或多个集团共同使用
                  </div>
                  <div className={styles.versionTags}>
                    <div className={styles.versionTag}>企业内容资产管理</div>
                    <div className={styles.versionTag}>云渲染</div>
                    <div className={styles.versionTag}>技术支持</div>
                  </div>
                </div>
                <div className={styles.pricingProductMainVsaluation}>
                  <div className={styles.valuationPrice}>
                    <div className={styles.valuationInfo}>
                      <span className={styles.valuationSymbol}>￥</span>
                      <div className={styles.valuationValue}> 199 </div>
                      <div className={styles.valuationUnit}> / 6个月起 </div>
                    </div>
                  </div>
                  <div className={styles.valuationButton}>
                    <div>
                      <div
                        className={styles.valuationCheckout}
                        style={{ background: '#dfb053', borderColor: '#dfb053' }}
                      >
                        <span>选择尊享版</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pricingProductEntitlement}>
                <div className={styles.atomContainer}>
                  <div className={styles.atomTitle}>
                    <span className={styles.atomName}> 核心权益 </span>
                  </div>
                  <div className={styles.entitlementEntitlements}>
                    <div className={styles.entitlementItem} style={{ color: '#dfb053' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 全量正版模板素材 </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#dfb053' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 无水印下载 </span>
                    </div>

                    <div className={styles.entitlementItem} style={{ color: '#dfb053' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 全用途商用授权 </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#dfb053' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 团队空间数量 10个</span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#dfb053' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 存储空间100GB/团队 </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#dfb053' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 多种格式设计文件转成在线模板 </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#dfb053' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 云渲染API </span>
                    </div>
                  </div>
                </div>
                <div className={styles.atomContainer} style={{ paddingTop: 20 }}>
                  <div className={styles.atomTitle}>
                    <span className={styles.atomName}> AI功能 </span>
                  </div>
                  <div className={styles.entitlementEntitlements}>
                    <div className={styles.entitlementItem} style={{ color: '#dfb053' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 智能抠图 / 240次 </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#dfb053' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 风格动漫化 / 200次 </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#dfb053' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 智能消除笔 / 200次 </span>
                    </div>

                    <div className={styles.entitlementItem} style={{ color: '#dfb053' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 智能尺寸延展 / 200次 </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#dfb053' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 批量套版 / 200次 </span>
                    </div>
                  </div>
                </div>
                <div className={styles.baseContainer} style={{ paddingTop: 20 }}>
                  <div className={styles.atomTitle}>
                    <span className={styles.atomName}> 服务 </span>
                  </div>
                  <div className={styles.entitlementEntitlements}>
                    <div className={styles.entitlementItem} style={{ color: '#dfb053' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 人工客服，在线答疑</span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#dfb053' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 技术支持，辅助实施，操作培训 </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 旗舰版 */}
            <div className={styles.pricingProduct}>
              <div className={styles.pricingProductMain}>
                <div className={styles.pricingProductMainVersion} style={{ background: '#252a58' }}>
                  <h4 className={styles.versionTitle}>
                    <span className={styles.versionTitleText}>尊享版</span>
                    <span className={styles.versionLimit}>100 人以上</span>
                  </h4>
                  <div className={styles.versionDescription}> 定制开发 </div>
                  <div className={styles.versionTags}>
                    <div className={styles.versionTag}>无限存储</div>
                    <div className={styles.versionTag}>最新AI功能</div>
                    <div className={styles.versionTag}>1V1专属服务</div>
                  </div>
                </div>
                <div className={styles.pricingProductMainVsaluation}>
                  <div className={styles.valuationPrice}>
                    <div className={styles.valuationDescription}>请咨询售前顾问</div>
                  </div>
                  <div className={styles.valuationButton}>
                    <div>
                      <div
                        className={styles.valuationCheckout}
                        style={{ background: '#252a58', borderColor: '#252a58' }}
                      >
                        <span>立即咨询</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pricingProductEntitlement}>
                <div className={styles.atomContainer}>
                  <div className={styles.atomTitle}>
                    <span className={styles.atomName}> 核心权益 </span>
                  </div>
                  <div className={styles.entitlementEntitlements}>
                    <div className={styles.entitlementItem} style={{ color: '#252a58' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 全量正版模板素材 </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#252a58' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 无水印下载 </span>
                    </div>

                    <div className={styles.entitlementItem} style={{ color: '#252a58' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 全用途商用授权 </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#252a58' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 团队空间数量（无限）</span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#252a58' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 存储空间（定制） </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#252a58' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 多种格式设计文件转成在线模板 </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#252a58' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 云渲染API </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#252a58' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> PDF渲染API </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#252a58' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 1V1专属服务团队 </span>
                    </div>
                  </div>
                </div>
                <div className={styles.atomContainer} style={{ paddingTop: 20 }}>
                  <div className={styles.atomTitle}>
                    <span className={styles.atomName}> AI功能 </span>
                  </div>
                  <div className={styles.entitlementEntitlements}>
                    <div className={styles.entitlementItem} style={{ color: '#252a58' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 智能抠图（定制） </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#252a58' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 风格动漫化（定制） </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#252a58' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 智能消除笔（定制） </span>
                    </div>

                    <div className={styles.entitlementItem} style={{ color: '#252a58' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 智能尺寸延展（定制） </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#252a58' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 批量套版（定制） </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#252a58' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 最新研发AI功能 </span>
                    </div>
                  </div>
                </div>
                <div className={styles.baseContainer} style={{ paddingTop: 20 }}>
                  <div className={styles.atomTitle}>
                    <span className={styles.atomName}> 服务 </span>
                  </div>
                  <div className={styles.entitlementEntitlements}>
                    <div className={styles.entitlementItem} style={{ color: '#252a58' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 人工客服，在线答疑</span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#252a58' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 技术支持，辅助实施，操作培训 </span>
                    </div>
                    <div className={styles.entitlementItem} style={{ color: '#252a58' }}>
                      <IconCheck></IconCheck>
                      <span className={styles.entitlementContent}> 专属客户成功经理 </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 权益详情 */}
          {/* <div className={styles.pricingEntitlements}>
            <div className={styles.commerceBlockTitle}>
              <div className={styles.mainTitle}>详细权益对比</div>
            </div>
          </div> */}
          {/* 常见问题 */}
          <div className={styles.pricingQuestions}>
            <div>
              <div className={styles.commerceBlockTitle}>
                <div className={styles.commerceBlockTitleMainTitle}>常见问题</div>
              </div>
              <div className={styles.pricingQuestionsDetails}>
                <div className={styles.detailItem}>
                  <div className={styles.problem}> Zhihui Editor 是什么？</div>
                  <div className={styles.answer}>
                    <span>
                      Zhihui Editor
                      是一款数字设计工具，非常适合创建各种图形，尤其是满足营销、广告和印刷等需求。购买许可证后，您可以将
                      Zhihui Editor 与现有的技术堆栈无缝集成。
                    </span>
                    <br className="framer-text"></br>
                    对于无法使用开发资源的用户，我们提供免费的专业设置服务以及定制选项（单独报价）以根据您的特定要求定制
                    Zhihui Editor。
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.problem}> 这是针对开发人员的嘛？</div>
                  <div className={styles.answer}>
                    <span>
                      不是。虽然 Zhihui Editor
                      最初是为开发人员构建的，但它也已发展为服务非技术受众。如果您不知道如何编程并且无法访问开发资源，完全可以使用我们面向C端的产品
                      <Link to="https://zhihui.qq.com/">腾讯云智绘</Link>。也可以让我们为您部署 Zhihui Editor
                      并根据您的需求进行调整 - 欢迎随时联系我们或立即<Link to="/pricing">开始</Link>使用自定义计划。
                    </span>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.problem}>这是给谁的？</div>
                  <div className={styles.answer}>
                    <span>Zhihui Editor 迎合多样化的受众，每个受众都有独特的兴趣和需求：</span>
                    <br></br>
                    <span>开发人员可以用其易于集成、文档齐全、稳定支持以及可自定义扩展的特性，来定制开发。</span>
                    <br></br>
                    <span>设计师被其广泛的设计功能、多样的模板以及为创意表达提供的自由所吸引。</span>
                    <br></br>
                    <span>产品经理欣赏 SDK 如何与其产品路线图保持一致、具有成本效益并且能够增强产品功能。</span>
                    <br></br>
                    <span>最终用户/客户受益于其用户友好的体验、实用性以及有效解决问题的能力。</span>
                    <span>
                      Zhihui Editor 是一款灵活的产品，可以轻松与任何数字环境集成。想要定制产品？可以
                      <Link to="/contact">联系我们</Link>
                    </span>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.problem}>什么样的数据会被传输到你们的服务器？</div>
                  <div className={styles.answer}>
                    <span>
                      仅包含核心 Zhihui Editor 功能所需的最低限度。不会向 Zhihui Editor API
                      服务器发送任何个人信息、cookie 或您的站点数据。您可以在隐私政策中阅读更多内容。
                    </span>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.problem}>可以访问源码嘛？</div>
                  <div className={styles.answer}>
                    <span>
                      Zhihui Editor 作为最小化的 JavaScript npm
                      包提供；完整的源代码仅在源代码许可计划（单独报价）中可用。
                    </span>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.problem}>可以定制Zhihui Editor嘛？</div>
                  <div className={styles.answer}>
                    <span>
                      Zhihui Editor 提供丰富的 API 来控制编辑器的
                      UI。从精简主题更新到深度自定义：您可以轻松添加、删除和更改元素和控件。它还支持各种模板、文本样式和可视化编辑功能，以满足您的设计需求。
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
