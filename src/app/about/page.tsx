export default function AboutPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        About me
      </h1>
      <article className="space-y-4">
        <p>
          I was born in Brazil and grew up curious about how things work. My
          first real deep dive into tech came during my{" "}
          <a href="https://cg.fmrp.usp.br/pb/cursos/informatica-biomedica/" target="_blank">
            Biomedical Informatics degree at USP
          </a>
          , where I spent countless hours analyzing MRI scans with Python.
        </p>
        <p>
          What started as academic research turned into a passion when I built a
          machine learning algorithm that could classify images and detect
          fractures and diseases.
        </p>
        <p>
          From there, I moved into software development and data engineering. I
          worked on projects ranging from{" "}
          <strong>notification systems at Amdocs</strong> to{" "}
          <strong>predictive models for blood donation campaigns at SaveLivez</strong>, 
          which reached 98% accuracy. Along the way, I fell in love with
          building APIs using Python and FastAPI, designing ETL pipelines, and
          working with SQL and MongoDB.
        </p>
        <p>
          Today, I&apos;m a Senior Software Engineer and Data Engineer,
          passionate about building scalable, impactful solutions. I&apos;m also
          pursuing a{" "}
          <a href="https://www.si.umich.edu/programs/master-applied-data-science-mads">
            Master’s in Applied Data Science at the University of Michigan
          </a>{" "}
          to keep pushing my knowledge further.
        </p>
        <p>
          If you want to connect, feel free to send me an email at{" "}
          <a href="mailto:norbiato.dev@gmail.com">norbiato.dev@gmail.com</a>.
        </p>
        <p>
          Best,
          <br />
          Beatriz
        </p>
      </article>
    </>
  );
}
