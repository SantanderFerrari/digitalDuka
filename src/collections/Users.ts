import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig={
    slug: "users",
    auth:{
        verify:{
            generateEmailHTML:({token})=>{
                return`<a href='${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}'>verify account</a>`
            },
          },
},
    access:{
    read:()=> true,
    create:()=> true,
    },
    fields: [
      {
        name: 'Products',
        label: 'Products',
        type: 'relationship',
        relationTo: 'products',
        hasMany: true,
        admin: {
          condition: () => false,
        },
      },
      {
        name: 'product_files',
        label: 'Product files',
        admin: {
          condition: () => false,
        },
        type: 'relationship',
        relationTo: 'product_files',
        hasMany: true,
      },
      {
        name: 'role',
        defaultValue: 'user',
        required: true,
  
        type: 'select',
        options: [
          { label: 'Admin', value: 'admin' },
          { label: 'User', value: 'user' },
        ],
        },
    ]
}