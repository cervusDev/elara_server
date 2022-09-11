/* eslint-disable max-classes-per-file */
/**
 * UseCase base class
 * @interface
 * @classdesc UseCase base class
 * @abstract
 * @method execute
 * @param {I} input - Input data
 * @returns {Promise<R>}
 * @template I, R
 */

export abstract class UseCase<I = never, R = I> {
  /**
   * Execute use case
   * @abstract
   * @param {I} input - Input data
   * @returns {Promise<R>}
   * @template I, R
   */
  public abstract execute(input: I): Promise<R>;
}
