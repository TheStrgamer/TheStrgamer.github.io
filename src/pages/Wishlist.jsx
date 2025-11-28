import { WishlistItem } from "../components/WishlistItem";

export const Wishlist = () => {
    const items = [
        { title: "Gornation Cargo Pants (Helst Light Grey large)", discount: "solveig10", url: "https://www.gornation.com/products/cargo-pants-men?variant=44564209926410" },
        { title: "Gornation Saru Oversized Hoodie", discount: "solveig10", url: "https://www.gornation.com/products/saru-oversized-hoodie-men?variant=49971135480074" },
        { title: "Gornation Premium Dip Belt", discount: "solveig10", url: "https://www.gornation.com/products/premium-dip-belt" },
        { title: "Gornation Insulated Workout Bottle 1L", discount: "solveig10", url: "https://www.gornation.com/products/insulated-workout-bottle-1l" },
        { title: "Gornation Performance Shorts", discount: "solveig10", url: "https://www.gornation.com/products/performance-shorts?variant=44564214677770" },
        { title: "Gornation Resistance Bands (2-7kg, har resten)", discount: "solveig10", url: "https://www.gornation.com/products/premium-resistance-bands?variant=43808844218634" },
        { title: "Parallettes", url: "https://www.movement-made.com/collections/equipment/products/parallettes" },
        { title: "Kindle" },
        { title: "Trådløse ørepropper" },
        { title: "Gamingtastatur" },
        { title: "Mikrofon" },
        { title: "Gamingheadset" },
        { title: "Proteinpulver" },
        { title: "Gavekort: Steam" },
        { title: "Gavekort: Rema" },
        { title: "Gavekort: Komplett" },
        { title: "Buldresko str 40" }
    ];


    return (
        <div className="max-w-xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
            {items.map((item, idx) => (
            <WishlistItem key={idx} title={item.title} discount={item.discount} url={item.url} />
            ))}
        </div>
    );
};