import { v4 as uuidV4 } from "uuid";

class Specification {
  categoryId?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor() {
    if (!this.categoryId) {
      this.categoryId = uuidV4();
    }
  }
}

export { Specification };
