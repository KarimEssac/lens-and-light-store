import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Alpha Z1 Flagship Camera',
    brand: 'Alpha',
    price: 3899.00,
    rating: 5,
    reviewCount: 328,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuU7ovYqCKCFnhn1QSSjpKQGZlvZoj0Grx55YCUgxeb6yEDGWUIZg4_3o1RLOUK94PHhyM8hR3v0szZFFPg9zWivwqTDuV1XVisFxsWFC1mgE13gLraoz2l3siDDF7TMHCpn6NF251uaIz1dQgZ9j9Qfk1R5zPhZk20iaMhZxBQznMlDI5i7vI5v56BQG28MIo-DJDH7FrDCUF2NZFnRj1Kol2mvzAqGYbHFl9Ec1GBnJgegtTdFdiYEQiknrGB1UVVq81st7egQM',
    category: 'Cameras',
    description: 'Professional full-frame mirrorless camera with 50MP sensor',
    inStock: true,
    sku: 'CAM-ALPHA-Z1-001',
    badge: 'New Arrival',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAXnvFG023IHMdhkE3f68FmYQJVXGu7x11o6RTG0LqUkFVbWIr33RGZf-3yULPaGLfCAoLlf0DMbvNx_6evAX7T9cG97_ONxJMP2eiSwESyWK_SgsiO1-Fx_ekyt8Ih9u5HMtl4Ai77yNFI3gY1gd8Z-pXxhxZfJB6rCoTobIJzrFgN6UzGjLMu4UXSOdn9Q_tsp0Ww-TnKibMi0fJ_L4khc323qogMBpKuKaNKJxCsxP8RQjlipf-7bTE6BI8jR5aAokbwOJR1_VE',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDwJ1Vth5Ae1ScaQyzCa9z2u5lOZVzEuVnf-ai1FQVWbVOKecyzvndCUqkSF4FOd04T_OjBUOEP7l_4AUnJ71mMD0gP7ilwB4lPEWIzOUynbBSOc_rl2Rk0fG8Aajqxa12Bb-r4lMWXohmoXNiOl-ua-2oiadugQbb1caKYkHZ0YeqnRuXnwfpaLvaOuZMBRedAbYzDrVDjIN-o-Ckd5HU0zCGRGkWqjMFfd0WtksssLpwRKClhfAeDIKLBO4_f0SzB7cCZQB4Tfww',
    ],
    specifications: [
      { label: 'Sensor', value: '50.0MP Full-Frame CMOS' },
      { label: 'ISO Range', value: '100-51200' },
      { label: 'Video', value: '8K 30fps' },
      { label: 'Screen', value: '3.2" Touchscreen LCD' },
    ],
    features: [
      'In-body 5-axis stabilization',
      'Dual card slots',
      'Weather-sealed body',
      '693-point AF system',
    ],
  },
  {
    id: '2',
    name: 'Canon EOS R5 Mirrorless Camera Body',
    brand: 'Canon',
    price: 3899.00,
    rating: 5,
    reviewCount: 245,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALkj9OWRV3-n3UEbV57o_5dKrjo1SC3QqDOT9XGkQOqb00Yok9J3zHnDXJtqky8r9ZiEpCq_75KiwALJ-jW5IpEJBq2yxUXRJMk7XCQEJZPFdoFOZrTRjhYK_x19SaWt4weWNjPgDuF5DAJ-1h-Wd1pedB7OLk8m0ylTb1ZNHhj9VBEHo06Bw8dyv5-H2ZdEwlNGQKHAyxxnfIwZQkg-NAHW7Z-4331Y991MVyW_TvrK-q-UADzk_58w9mzPgsD6okHAYhD1n5HYk',
    category: 'Cameras',
    description: 'High-resolution mirrorless camera with 8K video',
    inStock: true,
    sku: 'PH-90122-BLK',
  },
  {
    id: '3',
    name: 'RF 50mm f/1.2 L USM Lens',
    brand: 'Canon',
    price: 2299.00,
    rating: 5,
    reviewCount: 156,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCwaBcHDQ1Pxs-c7wZdQsX0VC4GhnCc1gMbPc0Gj4XilJGR8RbKWIUSE3K4Ap2jktQi05UZewZESnppRrhTBEu_BUNQZuKSMn-48uC2BXTSd7B2F9FUkC5Bul81YbHTeQUmVs2arww5ZRD14FCAixP0dvLDfgzkSWZwMPTwXimUNOSkt8kIRqXFmacY5hVtOor7oxu0EX0y5CUKDGOoR4P26uBGGaWfRzW7_pcjOcH1dhQvcRD5x84oyPM5TVkZK1AdrdMHDvyT9k',
    category: 'Lenses',
    description: 'Professional L-Series prime lens',
    inStock: true,
    sku: 'LN-RF50-001',
  },
  {
    id: '4',
    name: 'Lumix S5II Mirrorless Camera',
    brand: 'Panasonic',
    price: 1997.99,
    rating: 5,
    reviewCount: 189,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL7RunABqZaHr25DhYI0JF-_kSBSLScwX_EKZOjNZOIlfViURtN3ZK-5IjVRnp3XaRQuTFBYnMoEnNbhJaxztMowdMXol8yuSK9zGRgSE_6911LwCFTsRmfnhkoQ4zC9gNXOTbgNz2MHuXcJ35NY-AuS6McrUu6LW6QEklfvR1_K-n3egQ3f6bop2LsmAaTT3BZ4OV-Y-ng17zXjCfCU7J4BjRZXn6teTwJMvbxgs57dU_4vU5ChzBLjJsmTnWrT_ZDnLHJELz8jE',
    category: 'Cameras',
    description: 'L-Mount • Full Frame • 24.2MP',
    inStock: true,
    sku: 'PH-90122-BLK',
  },
  {
    id: '5',
    name: '35mm f/1.4 Art DG DN Prime Lens',
    brand: 'Sigma',
    price: 899.00,
    rating: 5,
    reviewCount: 134,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD54zo4298Uh1L6javNipLYiVi2m_gDmUQGNGTdota7-BGIuvsAdWQzudI9pYB_cB3LeSjLiaL6dIUYXPJFKeGksOOeffWnr-KAIVSMKEcK6MVMgY33x0-T19wOqT5u8jJC75smdYxWTAGx_1TQkOxdUydTMk84JTSEFk8f70rdK1pS6k4Y2ABBhwSG5_aiqHXsQWPqrpY7kI2t_K0yvoNHWhF3-AUUo2HBK9gxIh4ITd7twxp2fw1Z_WKzcz5bK9G2aRy2Lo5prjM',
    category: 'Lenses',
    description: 'L-Mount • Wide Angle • Prime',
    inStock: true,
    sku: 'LN-3514-L',
  },
  {
    id: '6',
    name: 'Peak Design Slide Lite Strap',
    brand: 'Peak Design',
    price: 59.95,
    rating: 5,
    reviewCount: 412,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA51K2VUZHF9YCbmc_mlhu23eV2D6eJ3H-kjuar5D5zngnkiJpKmq14YQM-wXC-ulA_Zkun3VKsbT6nG-nkXi3wpsiuQYMcXZhfEqt4F11CGjSbTNPmDm908NYF5XIvJHyBdmlol_6uaZFAB9tNgARYdbDeOit-lE5le2Nw7tAkg4s4cl2vYlsnEddj6hDi73HL4IsrspJBVn4i3OcAZmO3lyMNJGnV6WQmfCrgYnSYiEoifUcp-7l5ns1sTHYC6e0-1pMM0x8uHAk',
    category: 'Accessories',
    description: 'Black • Quick Release • Adjustable',
    inStock: true,
    sku: 'AC-SLD-BK',
  },
  {
    id: '7',
    name: 'Pro Studio Light Kit',
    brand: 'Neewer',
    price: 549.00,
    originalPrice: 599.00,
    rating: 5,
    reviewCount: 210,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTLLAzkbpdJKu3xI-6OWDFGyrWhhl5uUgN0u-Hjfg6Zzri3JWkDnWwGS6pQqxM2mjuqeEyBXR_MytEMcIkuXL1x71X-8MeRi9e3Ge-1G_KNdI1Sz_991tOi2QjDinF4c4c3rgPMsHxiK2RkwT-5K3OReQBgyvFsUbt6vtF0DlqjDTqQvUJPxK43Vkic334yBaDBK3mRdQ1vlIDoFFnRe_AjeVPt3T4a-nN53AlgU_Gn28FMlZllaKmlbaHOQgopX4Nl1thQM15oaM',
    category: 'Lighting',
    description: 'Dual Strobe + Softbox',
    inStock: true,
    sku: 'LT-STD-001',
    badge: 'Save $50',
  },
  {
    id: '8',
    name: 'Canvas Explorer Bag',
    brand: 'Peak Design',
    price: 189.00,
    rating: 4.3,
    reviewCount: 45,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiCRbF508BHKrQgsrA1W6_FcU6IzWf8XQZF44LvfHvDQ3lcCbqDEwS1EiDE7wyLsoJ_XkGuHBuNHIAwplmELs6pohJtq_44mZ1PAFKzLlOFJ4G0rYoCwSXs7lUa4CWEs6nOyndkZwsNFYBlh7CXnTwoQQtypSUWnWy9LabWX9ySRyBC92916zXq_PDGOKs3IWbobDHZaNhabI_sGOz9cGV9GdBXwKwnrv7MTFwQapboGFNVVgq7YoIcQluJLCC1WmZA-Tqmmjfi8I',
    category: 'Accessories',
    description: 'Weatherproof Messenger',
    inStock: true,
    sku: 'BAG-EXP-CAN',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 4);
};