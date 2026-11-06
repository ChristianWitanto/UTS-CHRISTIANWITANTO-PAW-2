import z from 'zod';

export const StoreHewanSchema = z.object({
  name: z.string().trim().min(5, "Nama Hewan Minimal 5 Karakter"),
  species: z.string().trim().min(3, "Spesies Hewan Minimal 3 Karakter"),
  ageMonth: z.number().min(0, "Usia Hewan harus berupa angka positif"),
  vaccine: z.string().trim().min(2, "Informasi Vaksin Minimal 2 Karakter")
})

export const UpdateHewanSchema = z.object({
  name: z.string().trim().min(5, "Nama Hewan Minimal 5 Karakter"),
  species: z.string().trim().min(3, "Spesies Hewan Minimal 3 Karakter"),
  ageMonth: z.number().min(0, "Usia Hewan harus berupa angka positif"),
  vaccine: z.string().trim().min(2, "Informasi Vaksin Minimal 2 Karakter")
})