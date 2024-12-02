// Before (problematic code)
<Link 
  href={url}
  aria-label={altText}
  id={elementId}  // This is causing the type error
  className={classNames(
    'sb-component',
    'sb-component-block',
    // ... other classes
  )}
>
  {children}
</Link>

// Corrected version
<Link 
  href={url}
  aria-label={altText}
  className={classNames(
    'sb-component',
    'sb-component-block',
    // ... other classes
  )}
>
  <div id={elementId}>  // Move id to a child element if needed
    {children}
  </div>
</Link>
