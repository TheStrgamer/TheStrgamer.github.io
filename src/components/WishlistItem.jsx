export const WishlistItem = ({ title, url, discount }) => {
    return (
        <div className="p-4 rounded-2xl shadow mb-3 bg-white border flex flex-col gap-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            {discount && (
                <p className="text-sm font-medium text-green-600">Rabattkode: {discount}</p>
            )}
            {url && (
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline text-sm"
                >
                    Link
                </a>
            )}
            <br/><br/>
        </div>

    );
};