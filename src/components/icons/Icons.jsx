export const Icons = ({ icon, size }) => {
  return (
    <>
      {icon === "close" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          width={size}
          height={size}
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256l105.3-105.4z" />
        </svg>
      )}
      {icon === "bars" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width={size}
          height={size}
        >
          <path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
        </svg>
      )}
      {icon === "linkedin" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          width={size}
          height={size}
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
          <circle cx={4} cy={4} r={2} />
        </svg>
      )}
      {icon === "github" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          width={size}
          height={size}
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      )}
      {icon === "link-external" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="feather feather-external-link"
          viewBox="0 0 24 24"
          width={size}
          height={size}
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
        </svg>
      )}
      {icon === "play-store" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 416 448.01"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          width={size}
          height={size}
        >
          <path d="M0 27.49v393c0 .85.26 1.69.73 2.39.47.71 1.15 1.26 1.93 1.59.79.33 1.65.42 2.49.25.84-.16 1.61-.57 2.21-1.17l204.63-199.56L7.37 24.42c-.61-.6-1.38-1-2.21-1.17-.84-.16-1.7-.07-2.49.25a4.337 4.337 0 0 0-2.66 3.98ZM297.8 142 41.22.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32L297.8 142ZM36.08 440.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L297.8 306l-60.61-57.95L36.08 440.39ZM401.38 199l-71.65-39.46L262.36 224l67.37 64.43L401.38 249c19.49-10.77 19.49-39.23 0-50Z" />
        </svg>
      )}
    </>
  );
};
