export default function ProductsPage() {
  const products = [
    { title: 'PVC Shelf Strips', description: 'Used in retail displays, fully customizable.' },
    { title: 'Hand Sanitizer Stands', description: 'Promotes hygiene in commercial areas.' },
    { title: 'ACP Signage', description: 'Durable aluminum panels for outdoor branding.' },
  ];

  return (
    <main className="py-16 bg-gray-50 px-10">
      <h3 className="text-3xl font-bold mb-10 text-center">Our Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
