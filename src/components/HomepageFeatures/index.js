import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '开箱即用',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        任意 js 框架均可使用，可以无缝融入您现有的 Vue 或 Angular 项目。利用我们的
        SDK，只需要简单的配置就可以获取全套的编辑器。
      </>
    )
  },
  {
    title: '海量设计资源',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        10万个优质模板、创意素材随心选；腾讯设计师自产独家素材；各大知名素材供应商合作伙伴，全方位满足各行业的创意素材需求。
      </>
    )
  },
  {
    title: '数据管理',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <>Zhihui Editor 有全套的数字化内容资产管理，使您能够轻松控制数据的保存位置和方式。</>
  },
  {
    title: '可定制',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <>轻松扩展创意内容制作。根据您的特定技术堆栈进行定制。从而实现与您现有系统的深度集成和无缝融合。</>
  },
  {
    title: 'AI应用',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        各种结合AI的应用：智能批量套版、自动尺寸延展、AIGC智能设计、 图片批量编辑等，帮Zhihui Editor设计工具提升效率。
      </>
    )
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{ justifyContent: 'center' }}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
