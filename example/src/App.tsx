import React, {
  useRef,
  CSSProperties,
} from 'react';
import { useContainerReadingProgress } from 'react-container-reading-progress';

// --- Sample Usage Component ---

function ReadingProgressExample() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Use the hook to get the reading progress for the container/content pair
  const readingProgress = useContainerReadingProgress(containerRef, contentRef);

  // Define inline styles for the progress bar
  const progressBarStyles: CSSProperties = {
    width: `${readingProgress}%`,
    backgroundColor: '#3b82f6', // Equivalent to bg-blue-600
    height: '100%', // Fill the container height
    borderRadius: '9999px', // Equivalent to rounded-full
    transition: 'width 100ms linear', // Equivalent to transition-all duration-100 ease-linear
  };

  const progressBarContainerStyles: CSSProperties = {
    width: '100%', // Equivalent to w-full
    backgroundColor: '#e5e7eb', // Equivalent to bg-gray-200
    borderRadius: '9999px', // Equivalent to rounded-full
    height: '20px', // Equivalent to h-2.5
    marginBottom: '1rem', // Equivalent to mb-4 (using rem for consistency with Tailwind spacing scale)
    display:'flex',
    flexDirection: 'row',
    
  };

  const containerStyles: CSSProperties = {
    border: '1px solid #d1d5db', // Equivalent to border and border-gray-300 (approx)
    height: '12rem', // Equivalent to h-48 (12 * 16px = 192px)
    overflowY: 'scroll', // Equivalent to overflow-y-scroll
    padding: '0.5rem', // Equivalent to p-2
    backgroundColor: '#f9fafb', // Equivalent to bg-gray-50
    borderRadius: '0.25rem', // Equivalent to rounded-md (approx)
  };

  const wrapperStyles: CSSProperties = {
    padding: '1rem', // Equivalent to p-4
    border: '1px solid #d1d5db', // Equivalent to border and border-gray-300 (approx)
    borderRadius: '0.375rem', // Equivalent to rounded-md (approx)
    marginBottom: '1rem', // Equivalent to mb-4
    maxWidth: '28rem', // Equivalent to max-w-md (approx)
    margin: 'auto', // Equivalent to mx-auto
  };

  return (
    <div style={wrapperStyles}>
      <h3 className='text-lg font-semibold mb-2'>
        useContainerReadingProgress Example
      </h3>

      {/* Progress Bar */}
      <div style={progressBarContainerStyles}>
        <div style={progressBarStyles}></div>
      </div>
       <span>Progress: {readingProgress}%</span>

      {/* Scrollable Container */}
      <div ref={containerRef} style={containerStyles}>
        {/* Content inside the container */}
        <div ref={contentRef}>
          <p className='mb-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className='mb-2'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className='mb-2'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p className='mb-2'>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          </p>
          <p className='mb-2'>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
            quo voluptas nulla pariatur?
          </p>
          <p className='mb-2'>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>
          <p className='mb-2'>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus.
          </p>
          <p className='mb-2'>
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet ut et voluptates repudiandae sint et
            molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
            delectus, ut aut reiciendis voluptatibus maiores alias consequatur
            aut perferendis doloribus asperiores repellat.
          </p>
        </div>
      </div>

      <p className='text-sm text-gray-600 mt-2'>
        Scroll the box above to see the progress bar update.
      </p>
    </div>
  );
}

// Main App component to render the example
export default function App() {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-6 text-center'>
        Container Reading Progress Hook Example
      </h1>
      <ReadingProgressExample />
    </div>
  );
}
