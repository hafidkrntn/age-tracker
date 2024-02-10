interface CustomCardProps {
  username: string;
  photos?: string;
  email?: string;
  umur: number;
  masadepan: number;
}

export function CardWithList({
  username,
  email,
  photos,
  umur,
  masadepan,
  ...props
}: CustomCardProps) {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      <li className="py-3 sm:py-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8 rounded-full"
              src={photos}
              alt="photo-profile"
            />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate ">
              {username}
            </p>
            <p className="text-sm text-gray-500 truncate">{email}</p>
          </div>
          <div className="items-center text-base font-semibold text-gray-900 ">
            <p>Current Age: {umur}</p>
            <p>Age in 10 years: {masadepan}</p>
          </div>
        </div>
      </li>
    </ul>
  );
}
