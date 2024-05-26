

const Footer = () => {


    return (
        <footer className="border-t-2 border-t-gray-200 dark:border-t-gray-600 py-4 dark:bg-neutral-900 ">
             <p className="text-sm text-textcolor flex justify-center">
                    &copy; 2024 Your Company. All rights reserved.
                </p>
            <div className="container mx-auto text-center flex justify-evenly items-center">
               
                <div className="mt-2">
                    <p className="text-gray-600">Follow us:</p>
                    <div className="flex justify-center mt-2">
                        <a href="#" className="text-gray-400 hover:text-white mr-4">Twitter</a>
                        <a href="#" className="text-gray-400 hover:text-white mr-4">Facebook</a>
                        {/* Add more social media links if needed */}
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-gray-600">Contact us:</p>
                    <p className="text-gray-400">123 Street Name, City, Country</p>
                    <p className="text-gray-400">Email: info@example.com</p>
                    <p className="text-gray-400">Phone: +1234567890</p>
                </div>
                <div className="mt-4">
                    <p className="text-gray-400">Privacy Policy</p>
                    <p className="text-gray-400">Terms of Service</p>
                    {/* Add more legal links if needed */}
                </div>
            </div>
        </footer>
    )
}

export default Footer