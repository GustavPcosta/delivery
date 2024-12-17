import React from 'react';
import img1 from '../../Assets/post-thumbnail-1.jpg'
import img2 from '../../Assets/post-thumbnail-2.jpg'
import img3 from '../../Assets/post-thumbnail-3.jpg'
import { CalendarIcon } from '../Svg/CalendaryIcon';
import CategoryIcon from '../Svg/CategoriaIcon';
const blogData = [
  {
    id: 1,
    imageSrc: img1,
    date: "22 Aug 2021",
    category: "tips & tricks",
    title: "Top 10 casual look ideas to dress up your kids",
    description: "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...",
    link: "#",
  },
  {
    id: 2,
    imageSrc: img2,
    date: "25 Aug 2021",
    category: "trending",
    title: "Latest trends of wearing street wears supremely",
    description: "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...",
    link: "#",
  },
  {
    id: 3,
    imageSrc: img3,
    date: "28 Aug 2021",
    category: "inspiration",
    title: "10 Different Types of comfortable clothes ideas for women",
    description: "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...",
    link: "#",
  },
];

const BlogCard = ({ post }) => (
  <div className="col-md-4">
    <article className="post-item card border-0 shadow-sm p-3">
      <div className="image-holder zoom-effect">
        <a href={post.link}>
          <img src={post.imageSrc} alt="post" className="card-img-top" />
        </a>
      </div>
      <div className="card-body">
        <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
          <div className="meta-date">
            <svg width="16" height="16">
              <CalendarIcon/>
            </svg>
            {post.date}
          </div>
          <div className="meta-categories">
            <svg width="16" height="16">
              <CategoryIcon/>
            </svg>
            {post.category}
          </div>
        </div>
        <div className="post-header">
          <h3 className="post-title">
            <a href={post.link} className="text-decoration-none">
              {post.title}
            </a>
          </h3>
          <p>{post.description}</p>
        </div>
      </div>
    </article>
  </div>
);

const LatestBlogSection = () => (
  <section id="latest-blog" className="pb-4">
    <div className="container-lg">
      <div className="row">
        <div className="section-header d-flex align-items-center justify-content-between my-4">
          <h2 className="section-title">Our Recent Blog</h2>
          <a href="#" className="btn btn-primary">
            View All
          </a>
        </div>
      </div>
      <div className="row">
        {blogData.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  </section>
);

export default LatestBlogSection;
