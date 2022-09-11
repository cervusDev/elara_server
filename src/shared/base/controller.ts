/**
 * Interface for the controller.
 * @class Controller
 * @template T The type of the model.
 * @export { BaseController }
 * @method {
 *  create?: (...args[]: any) => Promise<T>;
 *  all?: (...args[]: any) => Promise<T[]>;
 *  find?: (...args[]: any) => Promise<T>;
 *  patch?: (...args[]: any) => Promise<T>;
 *  delete?: (...args[]: any) => Promise<T>;
 *  }
 */
export abstract class BaseController<R> {
  public abstract create?(...args: any): Promise<R>;

  public abstract all?(...args: any): Promise<R[]>;

  public abstract find?(...args: any): Promise<R>;

  public abstract patch?(...args: any): Promise<R>;

  public abstract delete?(...args: any): Promise<void>;
}
