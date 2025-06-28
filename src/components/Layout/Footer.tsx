import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";



export default function Footer() {
  return (
    <footer className="bg-blue-900 border-t border-blue-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-2">
              Ceylon Electricity Board
            </h3>
            <div className="space-y-1 text-sm text-white">
              <div className="flex items-center">
                <MapPinIcon className="h-4 w-4 mr-2 text-white" />
                <span>
                  No. 50, Sir Chittampalam A. Gardiner Mawatha, Colombo 02, Sri
                  Lanka
                </span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-4 w-4 mr-2 text-white" />
                <span>Emergency: 1987 | General: +94 11 232 0911</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-4 w-4 mr-2 text-white" />
                <span>info@ceb.lk</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <div className="flex space-x-4"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 pt-4 border-t border-blue-800">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-white">
              &copy; {new Date().getFullYear()} Ceylon Electricity Board. All
              rights reserved.
            </p>
            <div className="mt-2 sm:mt-0 flex space-x-6 text-sm text-white">
              <span>ISO 9001:2015 Certified</span>
              <span>•</span>
              <span>Government of Sri Lanka</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
